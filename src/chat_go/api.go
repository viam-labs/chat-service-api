package chat

import (
	"context"

	"github.com/edaniels/golog"
	"go.viam.com/utils/rpc"

	pb "github.com/viam-labs/chat-service-api/src/chat_go/grpc"
	"go.viam.com/rdk/resource"
	"go.viam.com/rdk/robot"
)

var API = resource.APINamespace("viam-labs").WithServiceType("chat")

func Named(name string) resource.Name {
	return resource.NewName(API, name)
}

func FromRobot(r robot.Robot, name string) (Chat, error) {
	return robot.ResourceFromRobot[Chat](r, Named(name))
}

func init() {
	resource.RegisterAPI(API, resource.APIRegistration[Chat]{
		RPCServiceServerConstructor: NewRPCServiceServer,
		RPCServiceHandler:           pb.RegisterChatServiceHandlerFromEndpoint,
		RPCServiceDesc:              &pb.ChatService_ServiceDesc,
		RPCClient: func(
			ctx context.Context,
			conn rpc.ClientConn,
			remoteName string,
			name resource.Name,
			logger golog.Logger,
		) (Chat, error) {
			return NewClientFromConn(conn, remoteName, name, logger), nil
		},
	})
}

type Chat interface {
	resource.Resource
	Chat(ctx context.Context, message string) (string, error)
}

type serviceServer struct {
	pb.UnimplementedChatServiceServer
	coll resource.APIResourceCollection[Chat]
}

func NewRPCServiceServer(coll resource.APIResourceCollection[Chat]) interface{} {
	return &serviceServer{coll: coll}
}

func (s *serviceServer) Chat(ctx context.Context, req *pb.ChatRequest) (*pb.ChatResponse, error) {
	g, err := s.coll.Resource(req.Name)
	if err != nil {
		return nil, err
	}
	answer, err := g.Chat(ctx, req.Message)
	if err != nil {
		return nil, err
	}
	return &pb.ChatResponse{Answer: answer}, nil
}

func NewClientFromConn(conn rpc.ClientConn, remoteName string, name resource.Name, logger golog.Logger) Chat {
	sc := newSvcClientFromConn(conn, remoteName, name, logger)
	return clientFromSvcClient(sc, name.ShortName())
}

func newSvcClientFromConn(conn rpc.ClientConn, remoteName string, name resource.Name, logger golog.Logger) *serviceClient {
	client := pb.NewChatServiceClient(conn)
	sc := &serviceClient{
		Named:  name.PrependRemote(remoteName).AsNamed(),
		client: client,
		logger: logger,
	}
	return sc
}

type serviceClient struct {
	resource.Named
	resource.AlwaysRebuild
	resource.TriviallyCloseable
	client pb.ChatServiceClient
	logger golog.Logger
}

type client struct {
	*serviceClient
	name string
}

func clientFromSvcClient(sc *serviceClient, name string) Chat {
	return &client{sc, name}
}

func (c *client) Chat(ctx context.Context, message string) (string, error) {
	answer, err := c.client.Chat(ctx, &pb.ChatRequest{
		Name:    c.name,
		Message: message,
	})
	if err != nil {
		return nil, err
	}
	return answer
}
