### Credits

* The node server contains a basic nodejs based server based on the [nodejs website](https://nodejs.org/en/about/) with the adjustment to display the host information
* The docker file is based on the [node.js docker tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) 

### Run server

Change to server directory `cd node-server`{{execute T1}}

Run node server locally `node server.js`{{execute T1}}

Curl local server `curl localhost:3000`{{execute T2}}

Open in [new tab](https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com/)
