// @generated by protoc-gen-connect-es v1.5.0
// @generated from file chat.proto (package viamlabs.service.chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ChatRequest, ChatResponse } from "./chat_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service viamlabs.service.chat.v1.ChatService
 */
export const ChatService = {
  typeName: "viamlabs.service.chat.v1.ChatService",
  methods: {
    /**
     * @generated from rpc viamlabs.service.chat.v1.ChatService.Chat
     */
    chat: {
      name: "Chat",
      I: ChatRequest,
      O: ChatResponse,
      kind: MethodKind.Unary,
    },
  }
};

