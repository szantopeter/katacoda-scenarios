### Credits

* The node server contains a basic nodejs based server based on the [nodejs website](https://nodejs.org/en/about/) with the adjustment to display the host information
* The docker file is based on the [node.js docker tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) 

### Build and run server

Change to server directory `cd node-server`{{execute}}

Run node server locally `node server.js`{{execute}}

Curl local server `curl localhost:3000`{{execute}}

Open in [new tab](https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com/)

Build docker image `docker build -t exampledriven/node-server .`{{execute}}