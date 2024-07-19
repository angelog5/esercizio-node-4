const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>Hello, this is your custom message!</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
