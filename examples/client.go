package main

import (
	"context"
	"fmt"
	"os"

	"github.com/edaniels/golog"
	chat "github.com/viam-labs/chat-service-api/src/chat_go"
	chat "github.com/viam-labs/chat-service-api/src/chat_go"
	"go.viam.com/rdk/client"
	"go.viam.com/rdk/robot/client"
	"go.viam.com/rdk/utils"
	"go.viam.com/utils/rpc"
)

func main() {
  logger := golog.NewDevelopmentLogger("client")
  robot, err := client.New(
    context.Background(),
    os.Getenv("ROBOT_ADDRESS"),
    logger,
    client.WithDialOptions(rpc.WithCredentials(
      os.Getenv("API_KEY_ID"
        rpc.Credentials{
        Type: rpc.CredentialsTypeAPIKey,
        Payload: os.Getenv("API_KEY"),
      })),
      )
    )
  if err != nil {
    logger.Fatal(err)
  }

  defer robot.Close(context.Background())
  logger.Info("Resources:")
  logger.Info(robot.ResourceNames())

  chat, err := chat.FromRobot(robot, "chat")
  fmt.Println("err", err)

  answer, err := chat.Chat(context.Background(), "Please provide a list of famous robots from history")
  logger.Info("Answer:")
  logger.Info(answer)
}
