var os = require("os");

const http = require('http');

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  readServer().then(function(result) {
      response = {
          "request-url" : "http://node-server:3000",
          "response-from-host" : result.host,
          "client-host" : os.hostname()
      };

      console.log('sdfsd' + result.host);

      res.end(JSON.stringify(response));
  });
});

function readServer () {

    return new Promise(function(resolve, reject) {

        http.get('http://node-server:3000', (resp) => {
          let data = '';

          resp.on('data', (chunk) => {
            data += chunk;
          });

          resp.on('end', () => {
            resolve(JSON.parse(data));
          });

          resp.on("error", (err) => {
            console.log("Error: " + err.message);
            reject(err);
          });

        });

    });

}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
