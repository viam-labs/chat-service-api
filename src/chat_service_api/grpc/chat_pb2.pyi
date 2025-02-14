"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""

import builtins
import google.protobuf.descriptor
import google.protobuf.message
import typing

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing.final
class ChatRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    MESSAGE_FIELD_NUMBER: builtins.int
    name: builtins.str
    message: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        message: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["message", b"message", "name", b"name"]) -> None: ...

global___ChatRequest = ChatRequest

@typing.final
class ChatResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    ANSWER_FIELD_NUMBER: builtins.int
    answer: builtins.str
    def __init__(
        self,
        *,
        answer: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["answer", b"answer"]) -> None: ...

global___ChatResponse = ChatResponse
