// importing the necessary packages
const http = require('http')
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const util = require('util');
const formidable = require('formidable');

//creating a server
// we are specifically focusing on the request object that is being sent to the server 
const server = http.createServer((req, res)=> {
    //this is the path that is being passed to the server from client and is captured by request.url()
    let path = url.parse(req.url, true) // using url.parse() method will allow to break the url into differnet part. The second parameter (true) will leverage queryString module to change the string into an object.
    
    res.end();
})

server.listen(1234, function(){
    console.log('server listeing at 1234 port')
})