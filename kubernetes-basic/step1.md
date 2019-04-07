### Architecture, created in this step

<iframe frameborder="0" style="width:100%;height:300px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G1usAP7yyG7BdeFPwc499wsokO9dqfEdT1"></iframe>

### Credits

* The node server is based on the example in the [nodejs website](https://nodejs.org/en/about/) with the addition of displaying the host information
* The docker file is based on the [node.js docker tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) 

### Run server

Change to server directory `cd node-server`{{execute T2}}

Look around `ls -l`{{execute T2}}

Run node server locally `node server.js`{{execute T2}}

Curl local server `curl localhost:3000`{{execute T1}}

Or open in [browser](https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com/)
