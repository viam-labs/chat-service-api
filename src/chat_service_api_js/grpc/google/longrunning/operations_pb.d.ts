// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.10.0
// @generated from file google/longrunning/operations.proto (package google.longrunning, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, Duration, Extension, FieldList, JsonReadOptions, JsonValue, MethodOptions, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Status } from "../rpc/status_pb.js";

/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 *
 * @generated from message google.longrunning.Operation
 */
export declare class Operation extends Message<Operation> {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the
   * `name` should be a resource name ending with `operations/{unique_id}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   *
   * @generated from field: google.protobuf.Any metadata = 2;
   */
  metadata?: Any;

  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   *
   * @generated from field: bool done = 3;
   */
  done: boolean;

  /**
   * The operation result, which can be either an `error` or a valid `response`.
   * If `done` == `false`, neither `error` nor `response` is set.
   * If `done` == `true`, exactly one of `error` or `response` can be set.
   * Some services might not provide the result.
   *
   * @generated from oneof google.longrunning.Operation.result
   */
  result: {
    /**
     * The error result of the operation in case of failure or cancellation.
     *
     * @generated from field: google.rpc.Status error = 4;
     */
    value: Status;
    case: "error";
  } | {
    /**
     * The normal, successful response of the operation.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx`
     * is the original method name.  For example, if the original method name
     * is `TakeSnapshot()`, the inferred response type is
     * `TakeSnapshotResponse`.
     *
     * @generated from field: google.protobuf.Any response = 5;
     */
    value: Any;
    case: "response";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Operation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.Operation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Operation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Operation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Operation;

  static equals(a: Operation | PlainMessage<Operation> | undefined, b: Operation | PlainMessage<Operation> | undefined): boolean;
}

/**
 * The request message for
 * [Operations.GetOperation][google.longrunning.Operations.GetOperation].
 *
 * @generated from message google.longrunning.GetOperationRequest
 */
export declare class GetOperationRequest extends Message<GetOperationRequest> {
  /**
   * The name of the operation resource.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<GetOperationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.GetOperationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOperationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOperationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOperationRequest;

  static equals(a: GetOperationRequest | PlainMessage<GetOperationRequest> | undefined, b: GetOperationRequest | PlainMessage<GetOperationRequest> | undefined): boolean;
}

/**
 * The request message for
 * [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 *
 * @generated from message google.longrunning.ListOperationsRequest
 */
export declare class ListOperationsRequest extends Message<ListOperationsRequest> {
  /**
   * The name of the operation's parent resource.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The standard list filter.
   *
   * @generated from field: string filter = 1;
   */
  filter: string;

  /**
   * The standard list page size.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The standard list page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListOperationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.ListOperationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOperationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOperationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOperationsRequest;

  static equals(a: ListOperationsRequest | PlainMessage<ListOperationsRequest> | undefined, b: ListOperationsRequest | PlainMessage<ListOperationsRequest> | undefined): boolean;
}

/**
 * The response message for
 * [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 *
 * @generated from message google.longrunning.ListOperationsResponse
 */
export declare class ListOperationsResponse extends Message<ListOperationsResponse> {
  /**
   * A list of operations that matches the specified filter in the request.
   *
   * @generated from field: repeated google.longrunning.Operation operations = 1;
   */
  operations: Operation[];

  /**
   * The standard List next-page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  constructor(data?: PartialMessage<ListOperationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.ListOperationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOperationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOperationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOperationsResponse;

  static equals(a: ListOperationsResponse | PlainMessage<ListOperationsResponse> | undefined, b: ListOperationsResponse | PlainMessage<ListOperationsResponse> | undefined): boolean;
}

/**
 * The request message for
 * [Operations.CancelOperation][google.longrunning.Operations.CancelOperation].
 *
 * @generated from message google.longrunning.CancelOperationRequest
 */
export declare class CancelOperationRequest extends Message<CancelOperationRequest> {
  /**
   * The name of the operation resource to be cancelled.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<CancelOperationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.CancelOperationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelOperationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelOperationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelOperationRequest;

  static equals(a: CancelOperationRequest | PlainMessage<CancelOperationRequest> | undefined, b: CancelOperationRequest | PlainMessage<CancelOperationRequest> | undefined): boolean;
}

/**
 * The request message for
 * [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation].
 *
 * @generated from message google.longrunning.DeleteOperationRequest
 */
export declare class DeleteOperationRequest extends Message<DeleteOperationRequest> {
  /**
   * The name of the operation resource to be deleted.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<DeleteOperationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.DeleteOperationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOperationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOperationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOperationRequest;

  static equals(a: DeleteOperationRequest | PlainMessage<DeleteOperationRequest> | undefined, b: DeleteOperationRequest | PlainMessage<DeleteOperationRequest> | undefined): boolean;
}

/**
 * The request message for
 * [Operations.WaitOperation][google.longrunning.Operations.WaitOperation].
 *
 * @generated from message google.longrunning.WaitOperationRequest
 */
export declare class WaitOperationRequest extends Message<WaitOperationRequest> {
  /**
   * The name of the operation resource to wait on.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The maximum duration to wait before timing out. If left blank, the wait
   * will be at most the time permitted by the underlying HTTP/RPC protocol.
   * If RPC context deadline is also specified, the shorter one will be used.
   *
   * @generated from field: google.protobuf.Duration timeout = 2;
   */
  timeout?: Duration;

  constructor(data?: PartialMessage<WaitOperationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.WaitOperationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WaitOperationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WaitOperationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WaitOperationRequest;

  static equals(a: WaitOperationRequest | PlainMessage<WaitOperationRequest> | undefined, b: WaitOperationRequest | PlainMessage<WaitOperationRequest> | undefined): boolean;
}

/**
 * A message representing the message types used by a long-running operation.
 *
 * Example:
 *
 *     rpc Export(ExportRequest) returns (google.longrunning.Operation) {
 *       option (google.longrunning.operation_info) = {
 *         response_type: "ExportResponse"
 *         metadata_type: "ExportMetadata"
 *       };
 *     }
 *
 * @generated from message google.longrunning.OperationInfo
 */
export declare class OperationInfo extends Message<OperationInfo> {
  /**
   * Required. The message name of the primary return type for this
   * long-running operation.
   * This type will be used to deserialize the LRO's response.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
   *
   * @generated from field: string response_type = 1;
   */
  responseType: string;

  /**
   * Required. The message name of the metadata type for this long-running
   * operation.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
   *
   * @generated from field: string metadata_type = 2;
   */
  metadataType: string;

  constructor(data?: PartialMessage<OperationInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.longrunning.OperationInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationInfo;

  static equals(a: OperationInfo | PlainMessage<OperationInfo> | undefined, b: OperationInfo | PlainMessage<OperationInfo> | undefined): boolean;
}

/**
 * Additional information regarding long-running operations.
 * In particular, this specifies the types that are returned from
 * long-running operations.
 *
 * Required for methods that return `google.longrunning.Operation`; invalid
 * otherwise.
 *
 * @generated from extension: google.longrunning.OperationInfo operation_info = 1049;
 */
export declare const operation_info: Extension<MethodOptions, OperationInfo>;

