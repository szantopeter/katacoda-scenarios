Change to server directory `cd node-server`{{execute T3}}

Build docker image `docker build -t exampledriven/node-server:v1 .`{{execute T3}}

Create docker container and start server `docker run -p 3001:3000 --rm --name node-server exampledriven/node-server:v1`{{execute T3}}

Curl docker server `curl localhost:3001`{{execute T1}}

Or open in [browser](https://[[HOST_SUBDOMAIN]]-3001-[[KATACODA_HOST]].environments.katacoda.com/)

## Additional commands

See container logs `docker logs node-server`{{execute T1}}

Log into container `docker exec -it node-server /bin/bash`{{execute T1}}

Look around inside the container `ls -l`{{execute T1}}


