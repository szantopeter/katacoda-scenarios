var os = require("os");

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(`{"host" : "${os.hostname()}", "type" : "${os.type()}", "platform" : "${os.platform()}", "node-version" : "${process.version}"}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
