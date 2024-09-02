const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const { Socket } = require("dgram");
const cookieParser = require("cookie-parser");

const app = express();
const messageServer = http.createServer(app);
const io = socketIo(messageServer);

socket_objects = {};

app.use(cookieParser());
app.use((req, res, next) => {
  console.log("In main server...");
  next();
});
app.get("/", (req, res) => {
  res.send("Message server");
});

io.use((socket, next) => {
  console.log("In Socket Server...");
  if (socket.request.headers.chat_key) {
    //socket.request.headers.user = "A";
    next();
    return;
  }
  next(new Error("Authentication Error"));
});

io.on("connection", (socket) => {
  console.log("User connected...");
  console.log(socket.request.headers.user);
  //headers are not resent, these will be stored as it is
  //once they are sent during initial request

  socket_objects[socket.request.headers.user] = socket;

  socket.on("message", (msg) => {
    console.log(msg);
    try {
      jsonMessage = JSON.parse(msg);
      toUser = jsonMessage["to"];
      fromUser = jsonMessage["from"];
      msg = jsonMessage["msg"];
      if (socket_objects[toUser]) {
        socket_objects[toUser].emit("message", jsonMessage);
      } else {
        socket_objects[fromUser].emit("message", `${toUser} is not online`);
      }
    } catch(err){
        console.log(err);
    }
  });
  socket.on("disconnect", (reason) => {
    if(socket && socket.request && socket.request.headers.user){
        if(socket_objects[socket.request.headers.user]){
            delete socket_objects[socket.request.headers.user];
        }
    }
    console.log("User disconnected", reason);
  });
});

messageServer.listen(8082, (req, res) => {
  console.log("Message Server listneing on : ", 8082);
});
