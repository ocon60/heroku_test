var handlers = require("./handlers");

function route(pathname) {
  console.log("About to route a request for " + pathname);
  handlers.serveMain();
}

exports.route = route;