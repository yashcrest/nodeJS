// importing the necessary packages
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

//creating a server
// we are specifically focusing on the request object that is being sent to the server
const server = http.createServer((req, res) => {
  //this is the path that is being passed to the server from client and is captured by request.url()
  let path = url.parse(req.url, true); // using url.parse() method will allow to break the url into differnet part. The second parameter (true) will leverage queryString module to change the string into an object.
  // console.log(path.pathname); //this will print the path of the url that the client requests. if the request url is localhost:1234/abc/abc. this will print (/abc/abc)
  // console.log(path.query);
  //loading data this way will however not load the css file as the server doesn't know how to handle it.
  //we will have to make the filepath dynamic

  //if you do not know which form of data you are receiving from the client i.e. form-data , x-www-form-urlencoded
  if (req.method.toLowerCase() === "post") {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error(err.message);
        return;
      }
      res.writeHead(200, "OK", { "Content-Type": "text/plain" });
      res.write("The POST output\n\n");
      res.end(util.inspect({ fields: fields, files: files }));
    });
  } else if (req.method.toLowerCase() === "get") {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("The response\n");
    res.write("The response\n");
    res.write(util.inspect(path.query) + "\n\n");
    res.end("end of msg to browser");
  } else {
  }

  // let decoder = new StringDecoder('utf-8')
  // let buffer = '';
  // //the data method will be trigger, every time we get a data. meaning POST
  // req.on('data', function (data) {
  //     buffer += decoder.write(data);

  // })

  // req.on('end', function(){
  //     buffer += decoder.end();
  //     res.writeHead(200, {'Content-type' : 'text/plain'});
  //     res.write('The response\n');
  //     res.write('The response\n');
  //     res.write(util.inspect(path.query)+ '\n\n');
  //     res.write(buffer + '\n\n');
  //     res.end();
  // })
});

server.listen(1234, function () {
  console.log("server listeing at 1234 port");
});
