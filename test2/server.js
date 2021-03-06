var sys = require("sys");
var http = require("http");
var url = require("url");
path = require("path");
filesys = require("fs");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(5000);
  console.log("Server has started.");
}

exports.start = start;