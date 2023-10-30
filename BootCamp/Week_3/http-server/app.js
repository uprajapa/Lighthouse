const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  console.log("In requestHandler"); // NEW LINE
  const responseText = `Requested Path: ${request.url}\nRequest Method: ${request.method}`;
  response.end(responseText);
};

const server = http.createServer(requestHandler);
console.log("Server created"); // NEW LINE

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

console.log("Last line (after .listen call)"); // NEW LINE