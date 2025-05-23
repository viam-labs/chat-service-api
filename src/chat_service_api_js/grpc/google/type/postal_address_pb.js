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
// @generated from file google/type/postal_address.proto (package google.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Represents a postal address, e.g. for postal delivery or payments addresses.
 * Given a postal address, a postal service can deliver items to a premise, P.O.
 * Box or similar.
 * It is not intended to model geographical locations (roads, towns,
 * mountains).
 *
 * In typical usage an address would be created via user input or from importing
 * existing data, depending on the type of process.
 *
 * Advice on address input / editing:
 *  - Use an i18n-ready address widget such as
 *    https://github.com/google/libaddressinput)
 * - Users should not be presented with UI elements for input or editing of
 *   fields outside countries where that field is used.
 *
 * For more guidance on how to use this schema, please see:
 * https://support.google.com/business/answer/6397478
 *
 * @generated from message google.type.PostalAddress
 */
export const PostalAddress = /*@__PURE__*/ proto3.makeMessageType(
  "google.type.PostalAddress",
  () => [
    { no: 1, name: "revision", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "region_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "language_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "postal_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "sorting_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "administrative_area", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "locality", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "sublocality", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "address_lines", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "recipients", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 11, name: "organization", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

