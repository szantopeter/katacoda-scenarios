Change to server directory `cd node-server`{{execute Docker server}}

Build docker image `docker build -t exampledriven/node-server .`{{execute Docker server}}

Build docker image `docker run -p 3001:3000 --rm --name node-server exampledriven/node-server`{{execute Docker server}}

Curl docker server `curl localhost:3001`{{execute T2}}

Or open in [browser](https://[[HOST_SUBDOMAIN]]-3001-[[KATACODA_HOST]].environments.katacoda.com/)

## Additional commands

See container logs `docker logs node-server`{{execute T2}}

Log into container `docker exec -it node-server /bin/bash`{{execute T2}}


