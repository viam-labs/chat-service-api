# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: chat.proto
# Protobuf Python Version: 5.29.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    3,
    '',
    'chat.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nchat.proto\x12\x18viamlabs.service.chat.v1\x1a\x1cgoogle/api/annotations.proto\";\n\x0b\x43hatRequest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x18\n\x07message\x18\x02 \x01(\tR\x07message\"&\n\x0c\x43hatResponse\x12\x16\n\x06\x61nswer\x18\x01 \x01(\tR\x06\x61nswer2\x98\x01\n\x0b\x43hatService\x12\x88\x01\n\x04\x43hat\x12%.viamlabs.service.chat.v1.ChatRequest\x1a&.viamlabs.service.chat.v1.ChatResponse\"1\x82\xd3\xe4\x93\x02+\")/viamlabs/api/v1/service/chat/{name}/chatB\x14Z\x12./chat-service-apib\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'chat_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z\022./chat-service-api'
  _globals['_CHATSERVICE'].methods_by_name['Chat']._loaded_options = None
  _globals['_CHATSERVICE'].methods_by_name['Chat']._serialized_options = b'\202\323\344\223\002+\")/viamlabs/api/v1/service/chat/{name}/chat'
  _globals['_CHATREQUEST']._serialized_start=70
  _globals['_CHATREQUEST']._serialized_end=129
  _globals['_CHATRESPONSE']._serialized_start=131
  _globals['_CHATRESPONSE']._serialized_end=169
  _globals['_CHATSERVICE']._serialized_start=172
  _globals['_CHATSERVICE']._serialized_end=324
# @@protoc_insertion_point(module_scope)
