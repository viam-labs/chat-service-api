generate:
	buf generate --template ./src/proto/buf.gen.yaml ./src/proto -o ./src
	sed -i "" -e "s/import\ chat_pb2/from\ \.\ import\ chat_pb2/g" ./src/chat_service_api/grpc/chat_grpc.py
