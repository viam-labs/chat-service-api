// Copyright 2024 Google LLC
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

import { Any, Duration, MethodOptions, proto3 } from "@bufbuild/protobuf";
import { Status } from "../rpc/status_pb.js";

/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 *
 * @generated from message google.longrunning.Operation
 */
export const Operation = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.Operation",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: Any },
    { no: 3, name: "done", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "error", kind: "message", T: Status, oneof: "result" },
    { no: 5, name: "response", kind: "message", T: Any, oneof: "result" },
  ],
);

/**
 * The request message for
 * [Operations.GetOperation][google.longrunning.Operations.GetOperation].
 *
 * @generated from message google.longrunning.GetOperationRequest
 */
export const GetOperationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.GetOperationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The request message for
 * [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 *
 * @generated from message google.longrunning.ListOperationsRequest
 */
export const ListOperationsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.ListOperationsRequest",
  () => [
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 1, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The response message for
 * [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 *
 * @generated from message google.longrunning.ListOperationsResponse
 */
export const ListOperationsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.ListOperationsResponse",
  () => [
    { no: 1, name: "operations", kind: "message", T: Operation, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The request message for
 * [Operations.CancelOperation][google.longrunning.Operations.CancelOperation].
 *
 * @generated from message google.longrunning.CancelOperationRequest
 */
export const CancelOperationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.CancelOperationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The request message for
 * [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation].
 *
 * @generated from message google.longrunning.DeleteOperationRequest
 */
export const DeleteOperationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.DeleteOperationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The request message for
 * [Operations.WaitOperation][google.longrunning.Operations.WaitOperation].
 *
 * @generated from message google.longrunning.WaitOperationRequest
 */
export const WaitOperationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.WaitOperationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timeout", kind: "message", T: Duration },
  ],
);

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
export const OperationInfo = /*@__PURE__*/ proto3.makeMessageType(
  "google.longrunning.OperationInfo",
  () => [
    { no: 1, name: "response_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

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
export const operation_info = proto3.makeExtension(
  "google.longrunning.operation_info", 
  MethodOptions, 
  () => ({ no: 1049, kind: "message", T: OperationInfo }),
);

