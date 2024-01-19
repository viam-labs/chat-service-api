import asyncio
import os

from chat_service_api import Chat

from viam.logging import getLogger
from viam.robot.client import RobotClient

LOGGER = getLogger(__name__)

# these must be set, you can get them from your robot's 'CODE SAMPLE' tab
robot_api_key_id = os.getenv('API_KEY_ID') or ''
robot_api_key = os.getenv('API_KEY') or ''
robot_address = os.getenv('ROBOT_ADDRESS') or ''

async def connect():
    opts = RobotClient.Options.with_api_key(
      api_key=robot_api_key,
      api_key_id=robot_api_key_id,
    )
    return await RobotClient.at_address(robot_address, opts)


async def main():
    robot = await connect()

    LOGGER.info("Resources:")
    LOGGER.info(robot.resource_names)

    chat = Chat.from_robot(robot, name="chat")

    answer = await chat.chat("What is the meaning of life?")
    LOGGER.info(f"Answer: '{answer}'")
    
    await robot.close()


if __name__ == "__main__":
        asyncio.run(main())
