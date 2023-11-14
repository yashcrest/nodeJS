const net = require("net");

//create tcp server
const server = net.createServer((req, res) => {
  Socket.write("Echo server\r\n");
  Socket.pie(socket);
});

server.listen(3001, "0.0.0.0");
