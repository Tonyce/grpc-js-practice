var messages = require("./proto_gen/helloworld_pb");
var services = require("./proto_gen/helloworld_grpc_pb");
var grpc = require("@grpc/grpc-js");

function main() {
  var client = new services.GreeterClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );


  console.log(client.getChannel());

  var request = new messages.HelloRequest();
  var user = "world";

  request.setName(user);
  client.sayHello(request, function (err, response) {
    console.log("Greeting:", response.getMessage());
  });
}

main();
