/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SEAMessengerInterface extends ethers.utils.Interface {
  functions: {
    "fee()": FunctionFragment;
    "fulfillSLI(bytes32,uint256)": FunctionFragment;
    "fulfillsCounter()": FunctionFragment;
    "jobId()": FunctionFragment;
    "messengerPrecision()": FunctionFragment;
    "networkName()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestIdToSLIRequest(bytes32)": FunctionFragment;
    "requestSLI(uint256,address,bool,address)": FunctionFragment;
    "requests(uint256)": FunctionFragment;
    "requestsCounter()": FunctionFragment;
    "retryRequest(address,uint256)": FunctionFragment;
    "setChainlinkJobID(bytes32,uint256)": FunctionFragment;
    "setSLARegistry()": FunctionFragment;
    "slaRegistryAddress()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfillSLI",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillsCounter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "jobId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messengerPrecision",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "networkName",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestIdToSLIRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSLI",
    values: [BigNumberish, string, boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestsCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retryRequest",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setChainlinkJobID",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSLARegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "slaRegistryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfillSLI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fulfillsCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jobId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messengerPrecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "networkName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestIdToSLIRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requestSLI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestsCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setChainlinkJobID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSLARegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slaRegistryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "JobIdModified(address,bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SLIReceived(address,uint256,bytes32,bytes32)": EventFragment;
    "SLIRequested(address,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JobIdModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SLIReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SLIRequested"): EventFragment;
}

export type ChainlinkCancelledEvent = TypedEvent<[string] & { id: string }>;

export type ChainlinkFulfilledEvent = TypedEvent<[string] & { id: string }>;

export type ChainlinkRequestedEvent = TypedEvent<[string] & { id: string }>;

export type JobIdModifiedEvent = TypedEvent<
  [string, string, BigNumber] & { owner: string; jobId: string; fee: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SLIReceivedEvent = TypedEvent<
  [string, BigNumber, string, string] & {
    slaAddress: string;
    periodId: BigNumber;
    requestId: string;
    chainlinkResponse: string;
  }
>;

export type SLIRequestedEvent = TypedEvent<
  [string, BigNumber, string] & {
    caller: string;
    requestsCounter: BigNumber;
    requestId: string;
  }
>;

export class SEAMessenger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SEAMessengerInterface;

  functions: {
    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    fulfillSLI(
      _requestId: BytesLike,
      _chainlinkResponse: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fulfillsCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    jobId(overrides?: CallOverrides): Promise<[string]>;

    messengerPrecision(overrides?: CallOverrides): Promise<[BigNumber]>;

    networkName(overrides?: CallOverrides): Promise<[string]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestIdToSLIRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { slaAddress: string; periodId: BigNumber }
    >;

    requestSLI(
      _periodId: BigNumberish,
      _slaAddress: string,
      _messengerOwnerApproval: boolean,
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requests(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    requestsCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    retryRequest(
      _slaAddress: string,
      _periodId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setChainlinkJobID(
      _newJobId: BytesLike,
      _feeMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSLARegistry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slaRegistryAddress(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  fulfillSLI(
    _requestId: BytesLike,
    _chainlinkResponse: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fulfillsCounter(overrides?: CallOverrides): Promise<BigNumber>;

  jobId(overrides?: CallOverrides): Promise<string>;

  messengerPrecision(overrides?: CallOverrides): Promise<BigNumber>;

  networkName(overrides?: CallOverrides): Promise<string>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestIdToSLIRequest(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { slaAddress: string; periodId: BigNumber }>;

  requestSLI(
    _periodId: BigNumberish,
    _slaAddress: string,
    _messengerOwnerApproval: boolean,
    _callerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  requestsCounter(overrides?: CallOverrides): Promise<BigNumber>;

  retryRequest(
    _slaAddress: string,
    _periodId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setChainlinkJobID(
    _newJobId: BytesLike,
    _feeMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSLARegistry(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slaRegistryAddress(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fee(overrides?: CallOverrides): Promise<BigNumber>;

    fulfillSLI(
      _requestId: BytesLike,
      _chainlinkResponse: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fulfillsCounter(overrides?: CallOverrides): Promise<BigNumber>;

    jobId(overrides?: CallOverrides): Promise<string>;

    messengerPrecision(overrides?: CallOverrides): Promise<BigNumber>;

    networkName(overrides?: CallOverrides): Promise<string>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestIdToSLIRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { slaAddress: string; periodId: BigNumber }
    >;

    requestSLI(
      _periodId: BigNumberish,
      _slaAddress: string,
      _messengerOwnerApproval: boolean,
      _callerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requests(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    requestsCounter(overrides?: CallOverrides): Promise<BigNumber>;

    retryRequest(
      _slaAddress: string,
      _periodId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setChainlinkJobID(
      _newJobId: BytesLike,
      _feeMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSLARegistry(overrides?: CallOverrides): Promise<void>;

    slaRegistryAddress(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChainlinkCancelled(bytes32)"(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    ChainlinkCancelled(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    "ChainlinkFulfilled(bytes32)"(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    ChainlinkFulfilled(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    "ChainlinkRequested(bytes32)"(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    ChainlinkRequested(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    "JobIdModified(address,bytes32,uint256)"(
      owner?: string | null,
      jobId?: null,
      fee?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; jobId: string; fee: BigNumber }
    >;

    JobIdModified(
      owner?: string | null,
      jobId?: null,
      fee?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; jobId: string; fee: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SLIReceived(address,uint256,bytes32,bytes32)"(
      slaAddress?: string | null,
      periodId?: null,
      requestId?: BytesLike | null,
      chainlinkResponse?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      {
        slaAddress: string;
        periodId: BigNumber;
        requestId: string;
        chainlinkResponse: string;
      }
    >;

    SLIReceived(
      slaAddress?: string | null,
      periodId?: null,
      requestId?: BytesLike | null,
      chainlinkResponse?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      {
        slaAddress: string;
        periodId: BigNumber;
        requestId: string;
        chainlinkResponse: string;
      }
    >;

    "SLIRequested(address,uint256,bytes32)"(
      caller?: string | null,
      requestsCounter?: null,
      requestId?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { caller: string; requestsCounter: BigNumber; requestId: string }
    >;

    SLIRequested(
      caller?: string | null,
      requestsCounter?: null,
      requestId?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { caller: string; requestsCounter: BigNumber; requestId: string }
    >;
  };

  estimateGas: {
    fee(overrides?: CallOverrides): Promise<BigNumber>;

    fulfillSLI(
      _requestId: BytesLike,
      _chainlinkResponse: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fulfillsCounter(overrides?: CallOverrides): Promise<BigNumber>;

    jobId(overrides?: CallOverrides): Promise<BigNumber>;

    messengerPrecision(overrides?: CallOverrides): Promise<BigNumber>;

    networkName(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestIdToSLIRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestSLI(
      _periodId: BigNumberish,
      _slaAddress: string,
      _messengerOwnerApproval: boolean,
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requests(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    requestsCounter(overrides?: CallOverrides): Promise<BigNumber>;

    retryRequest(
      _slaAddress: string,
      _periodId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setChainlinkJobID(
      _newJobId: BytesLike,
      _feeMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSLARegistry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slaRegistryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fulfillSLI(
      _requestId: BytesLike,
      _chainlinkResponse: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fulfillsCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    jobId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messengerPrecision(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    networkName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestIdToSLIRequest(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestSLI(
      _periodId: BigNumberish,
      _slaAddress: string,
      _messengerOwnerApproval: boolean,
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestsCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    retryRequest(
      _slaAddress: string,
      _periodId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setChainlinkJobID(
      _newJobId: BytesLike,
      _feeMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSLARegistry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slaRegistryAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
