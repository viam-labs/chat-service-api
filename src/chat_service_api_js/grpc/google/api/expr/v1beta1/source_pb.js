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
//

// @generated by protoc-gen-es v1.10.0
// @generated from file google/api/expr/v1beta1/source.proto (package google.api.expr.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Source information collected at parse time.
 *
 * @generated from message google.api.expr.v1beta1.SourceInfo
 */
export const SourceInfo = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1beta1.SourceInfo",
  () => [
    { no: 2, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "line_offsets", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 4, name: "positions", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
  ],
);

/**
 * A specific position in source.
 *
 * @generated from message google.api.expr.v1beta1.SourcePosition
 */
export const SourcePosition = /*@__PURE__*/ proto3.makeMessageType(
  "google.api.expr.v1beta1.SourcePosition",
  () => [
    { no: 1, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "line", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "column", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

