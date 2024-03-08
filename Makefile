generate:
	export PATH="${PATH}:${HOME}/go/bin";buf generate buf.build/googleapis/googleapis --template ./src/proto/buf.gen.yaml  -o ./src
	export PATH="${PATH}:${HOME}/go/bin";buf generate --template ./src/proto/buf.gen.yaml ./src/proto -o ./src
	sed -i "" -e "s/import\ chat_pb2/from\ \.\ import\ chat_pb2/g" ./src/chat_service_api/grpc/chat_grpc.py
