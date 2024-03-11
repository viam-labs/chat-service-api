import * as Viam from '@viamrobotics/sdk';

/** A service that enables chat capabilities */
export interface Chat extends Viam.Resource {
  /**
   * Get chat response to provided message.
   *
   * @param message - Chat message to send.
   * @returns - The chat response text.
   */
  chat: (
    message: string
  ) => Promise<string>;
}