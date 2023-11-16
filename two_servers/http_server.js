const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from http server\n");
});

server.listen(3002, "0.0.0.0");
