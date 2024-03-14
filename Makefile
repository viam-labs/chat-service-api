generate: install
	PATH="$$PATH:$$PWD/node_modules/.bin" buf generate --template ./src/proto/buf.gen.yaml buf.build/googleapis/googleapis -o ./src
	PATH="$$PATH:$$PWD/node_modules/.bin" buf generate --template ./src/proto/buf.gen.yaml ./src/proto -o ./src
	sed -i "" -e "s/import\ chat_pb2/from\ \.\ import\ chat_pb2/g" ./src/chat_service_api/grpc/chat_grpc.py

install:
	pip install -r requirements.lock
	npm ci
