# chat-service-api

Protobuf API and gRPC bindings for `chat` service to use with Viam modules.

_chat-service-api_ proves the protobuf API and gRPC bindings for chat model communication.

## API

The `chat` resource implements the following API:

### chat(message=string): answer=string

The _chat()_ command takes:

- message: the question or prompt to pass to the the chat model

**Returns:** The answer from the model as a string.

## Usage

### Python

Because this module uses a custom protobuf-based API, you must include this project in your client code. One way to do this is to include it in your pyproject.yaml or requirements.txt as follows:

``` txt
chat_service_api @ git+https://github.com/viam-labs/chat-service-api.git@main
```

It can be imported and used as follows:

```python
from chat_service_api import Chat
chat = Chat.from_robot(robot, "chat")
answer = await chat.chat("What is the meaning of life?")
print(f"Answer: {answer}")
```

See [`examples/client.py`](./examples/client.py) for a complete example.

### Go

Because this module uses a custom protobuf-based API, you must import and use in your client code as follows:

```go
import chat "github.com/viam-labs/chat-service-api/src/chat_go"

chat, err := chat.FromRobot(robot, "chat")
answer, err := chat.chat(context.Background(), "What is the meaning of life?")
fmt.PrintLn(answer)
```

See [`examples/client.go`](./examples/client.go) for a complete example.

## Typescript

Because this module uses a custom protobuf-based API, you must include this project in your client code.  One way to do this is to include it in your package.json as follows:

``` txt
"chat-service-api": "github:viam-labs/chat-service-api",
```

It is recommended that you include a tag at the end of the github import.
You can now use it in your code as follows:

``` javascript
const chat = new ChatClient(client, "chat");
await chat.chat("What is the meaning of life?");
```

## Development

This project is managed by [`rye`](https://rye-up.com/). To initialize the development environment, follow the [installation instructions](https://rye-up.com/guide/installation/) and run:

```console
rye sync
```

To rebuild the gRPC bindings run:

```console
make generate
```
