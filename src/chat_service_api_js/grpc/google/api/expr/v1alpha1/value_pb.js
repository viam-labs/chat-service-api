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
// @generated from file google/api/expr/v1alpha1/value.proto (package google.api.expr.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, NullValue, proto3 } from "@bufbuild/protobuf";

/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 *
 * @generated from message google.api.expr.v1alpha1.Value
 */
export const Value = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1alpha1.Value",
  () => [
    { no: 1, name: "null_value", kind: "enum", T: proto3.getEnumType(NullValue), oneof: "kind" },
    { no: 2, name: "bool_value", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "kind" },
    { no: 3, name: "int64_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "kind" },
    { no: 4, name: "uint64_value", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "kind" },
    { no: 5, name: "double_value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "kind" },
    { no: 6, name: "string_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 7, name: "bytes_value", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "kind" },
    { no: 9, name: "enum_value", kind: "message", T: EnumValue, oneof: "kind" },
    { no: 10, name: "object_value", kind: "message", T: Any, oneof: "kind" },
    { no: 11, name: "map_value", kind: "message", T: MapValue, oneof: "kind" },
    { no: 12, name: "list_value", kind: "message", T: ListValue, oneof: "kind" },
    { no: 15, name: "type_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
  ],
);

/**
 * An enum value.
 *
 * @generated from message google.api.expr.v1alpha1.EnumValue
 */
export const EnumValue = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1alpha1.EnumValue",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 *
 * @generated from message google.api.expr.v1alpha1.ListValue
 */
export const ListValue = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1alpha1.ListValue",
  () => [
    { no: 1, name: "values", kind: "message", T: Value, repeated: true },
  ],
);

/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 *
 * @generated from message google.api.expr.v1alpha1.MapValue
 */
export const MapValue = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1alpha1.MapValue",
  () => [
    { no: 1, name: "entries", kind: "message", T: MapValue_Entry, repeated: true },
  ],
);

/**
 * An entry in the map.
 *
 * @generated from message google.api.expr.v1alpha1.MapValue.Entry
 */
export const MapValue_Entry = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1alpha1.MapValue.Entry",
  () => [
    { no: 1, name: "key", kind: "message", T: Value },
    { no: 2, name: "value", kind: "message", T: Value },
  ],
  {localName: "MapValue_Entry"},
);

