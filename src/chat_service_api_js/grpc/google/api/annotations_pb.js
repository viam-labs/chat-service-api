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
// @generated from file google/api/annotations.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodOptions, proto3 } from "@bufbuild/protobuf";
import { HttpRule } from "./http_pb.js";

/**
 * See `HttpRule`.
 *
 * @generated from extension: google.api.HttpRule http = 72295728;
 */
export const http = proto3.makeExtension(
  "google.api.http", 
  MethodOptions, 
  () => ({ no: 72295728, kind: "message", T: HttpRule }),
);

