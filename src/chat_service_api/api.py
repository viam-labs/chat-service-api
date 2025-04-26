"""
This file outlines the general structure for the API around a custom, modularized service.

It defines the abstract class definition that all concrete implementations must follow,
the gRPC service that will handle calls to the service,
and the gRPC client that will be able to make calls to this service.

In this example, the ``Chat`` abstract class defines what functionality is required for all Chat services.
It extends ``ServiceBase``, as all service types must.
It also defines its specific ``SUBTYPE``, which is used internally to keep track of supported types.

The ``ChatRPCService`` implements the gRPC service for the Chat service. This will allow other robots and clients to make
requests of the Chat service. It extends both from ``ChatServiceBase`` and ``RPCServiceBase``.
The former is the gRPC service as defined by the proto, and the latter is the class that all gRPC services must inherit from.

Finally, the ``ChatClient`` is the gRPC client for a Chat service. It inherits from ChatService since it implements
 all the same functions. The implementations are simply gRPC calls to some remote Chat service.

To see how this custom modular service is registered, see the __init__.py file.
"""

import abc
from typing import Any, List, Mapping, Optional

from grpclib.client import Channel
from grpclib.server import Stream

from viam.resource.rpc_service_base import ResourceRPCServiceBase
from viam.resource.types import RESOURCE_TYPE_SERVICE, API
from viam.services.service_base import ServiceBase

from .grpc.chat_grpc import ChatServiceBase, ChatServiceStub

from .grpc.chat_pb2 import ChatRequest, ChatResponse


class Chat(ServiceBase):

    API = API("viam-labs", RESOURCE_TYPE_SERVICE, "chat")

    @abc.abstractmethod
    async def chat(self, message: str) -> str: ...


class ChatRPCService(ChatServiceBase, ResourceRPCServiceBase):

    RESOURCE_TYPE = Chat

    async def Chat(self, stream: Stream[ChatRequest, ChatResponse]) -> None:
        request = await stream.recv_message()
        assert request is not None
        name = request.name
        service = self.get_resource(name)
        resp = await service.chat(request.message)
        await stream.send_message(ChatResponse(answer=resp))


class ChatClient(Chat):

    def __init__(self, name: str, channel: Channel) -> None:
        self.channel = channel
        self.client = ChatServiceStub(channel)
        super().__init__(name)

    async def chat(self, message: str = "", *, extra: Optional[Mapping[str, Any]] = None) -> str:
        request = ChatRequest(name=self.name, message=message, extra=extra)
        response: ChatResponse = await self.client.Chat(request)
        return response.answer
