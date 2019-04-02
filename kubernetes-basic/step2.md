Change to server directory `cd node-server`{{execute T3}}

Build docker image `docker build -t exampledriven/node-server .`{{execute T3}}

Build docker image `docker run -p 3001:3000 --rm exampledriven/node-server`{{execute T4}}

Curl docker server `curl localhost:3001`{{execute T5}}

See inside docker image `docker run -p 3002:3000 --rm -it exampledriven/node-server /bin/bash`{{execute T6}}


