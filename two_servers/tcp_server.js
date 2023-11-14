const net = require("net");

//create tcp server
const server = net.createServer((socket) => {
  socket.write("Echo server\r\n");

  //echo the messages received back to the client
  socket.on("data", (data) => {
    socket.write(data);
  });

  //handle socket close
  socket.on("end", () => {
    console.log("Client Disconnected!");
  });
});

//server listens on port 3001
server.listen(3001, "0.0.0.0", console.log("TCP server running in port 3001!"));
