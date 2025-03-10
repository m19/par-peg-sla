"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const express_1 = __importDefault(require("express"));
const abis_1 = require("./abis");
let web3Uri;
let provider;
const COINGECKO_URL = "https://api.coingecko.com/api/v3/coins/par-stablecoin";
async function getSLAData(address) {
    const slaContract = new ethers_1.Contract(address, abis_1.SLAABI, provider);
    const ipfsCID = await slaContract.ipfsHash();
    console.log(`SLA IPFS url: ${process.env.DEVELOP_IPFS_URI}/ipfs/${ipfsCID}`);
    const periodType = await await slaContract.periodType();
    console.log("periodType", periodType);
    const messengerAddress = await slaContract.messengerAddress();
    const { data } = await axios_1.default.get(`${process.env.IPFS_GATEWAY_URI}/ipfs/${ipfsCID}`);
    return { ...data, periodType, messengerAddress };
}
/**
 * Function that uses Coingecko to query the average PAR price in the given period
 * In a real life situation, trusting Coingecko exclusively is probably not a good idea and instead multiple data sources should be used
 * @param start unix timestamp in seconds of the start of the period to query from
 * @param end unix timestamp in seconds of the end of the period to query from
 * @returns average par price in that period
 */
async function getHistoricalPARPrice(start, end) {
    const promises = [];
    const days = (end - start) / 86400;
    console.log("start date", moment_1.default.unix(start).toLocaleString());
    console.log("end date", moment_1.default.unix(end).toLocaleString());
    for (let i = 0; i <= days; i++) {
        const url = `${COINGECKO_URL}/history?date=${moment_1.default.unix(start).add(i, "days").format("DD-MM-YYYY")}`;
        promises.push(axios_1.default.get(url));
    }
    const results = await Promise.all(promises);
    const dailyPrices = results.map(({ data }) => {
        return data.market_data.current_price.eur;
    });
    const sum = dailyPrices.reduce((a, b) => Number(a) + Number(b), 0);
    const average = sum / dailyPrices.length;
    return average;
}
async function getSLI(requestData) {
    const slaData = await getSLAData(requestData.sla_address);
    console.log('SLA Data:');
    console.log(slaData);
    const messenger = new ethers_1.Contract(slaData.messengerAddress, abis_1.MessengerABI, provider);
    const precision = await messenger.messengerPrecision();
    console.log("precision", precision);
    const averageParPrice = await getHistoricalPARPrice(requestData.sla_monitoring_start, requestData.sla_monitoring_end);
    console.log("averageParPrice", averageParPrice);
    const sli = averageParPrice * precision;
    return sli;
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', async (req, res) => {
    const { id, data } = req.body;
    console.log('Request Body:');
    console.log(req.body);
    const requestData = {
        sla_address: data.sla_address,
        network_name: data.network_name,
        sla_monitoring_start: data.sla_monitoring_start,
        sla_monitoring_end: data.sla_monitoring_end,
    };
    web3Uri = process.env[`${requestData.network_name.toUpperCase()}_URI`];
    provider = new ethers_1.providers.JsonRpcProvider(web3Uri);
    const result = await getSLI(requestData);
    console.log('result:', result);
    res.send({
        jobRunID: id,
        data: {
            result,
        },
    });
});
exports.default = app;
