"""
This file registers the model with the Python SDK.
"""

from viam.resource.registry import Registry, ResourceRegistration

from .api import ChatClient, ChatRPCService, Chat

Registry.register_subtype(ResourceRegistration(Chat, ChatRPCService, lambda name, channel: ChatClient(name, channel)))
