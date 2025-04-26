import { Struct, JsonValue } from '@bufbuild/protobuf';
import * as pb from './grpc/chat_pb';
import { ChatService } from './grpc/chat_connect';
import * as Viam from '@viamrobotics/sdk';
import { Client } from '@connectrpc/connect';
import type { Chat } from './interface';

/**
 * A gRPC-web client for a Vision service.
 *
 * @group Clients
 */
export class ChatClient implements Chat {
  private client: Client<typeof ChatService>;
  private readonly name: string;
  private readonly options: Viam.Options;

  constructor(client: Viam.RobotClient, name: string, options: Viam.Options = {}) {
    this.client = client.createServiceClient(ChatService);
    this.name = name;
    this.options = options;
  }

  async chat(message: string, extra = {}) {
    const request = new pb.ChatRequest({
      name: this.name,
      message,
      extra: Struct.fromJson(extra),
    });

    this.options.requestLogger?.(request);

    const response = await this.client.chat(request);
    return response.answer;
  }

  async doCommand(_command: Struct): Promise<JsonValue> {
    return {}
  }

}
