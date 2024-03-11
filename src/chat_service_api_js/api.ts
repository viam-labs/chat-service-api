import { Struct } from 'google-protobuf/google/protobuf/struct_pb';
import pb from './grpc/chat_pb';
import { ChatServiceClient } from './grpc/chat_pb_service';
import * as Viam from '@viamrobotics/sdk';
import type { Chat } from './interface';

/**
 * A gRPC-web client for a Vision service.
 *
 * @group Clients
 */
export class ChatClient implements Chat {
  private client: ChatServiceClient;
  private readonly name: string;
  private readonly options: Viam.Options;

  constructor(client: Viam.RobotClient, name: string, options: Viam.Options = {}) {
    this.client = client.createServiceClient(ChatServiceClient);
    this.name = name;
    this.options = options;
  }

  private get service() {
    return this.client;
  }

  async chat(message: string) {
    const { service } = this;

    const request = new pb.ChatRequest();
    request.setName(this.name);
    request.setMessage(message);

    this.options.requestLogger?.(request);

    const response = await Viam.promisify<
      pb.ChatRequest,
      pb.ChatResponse
    >(service.chat.bind(service), request);

    return response.getAnswer();
  }

}