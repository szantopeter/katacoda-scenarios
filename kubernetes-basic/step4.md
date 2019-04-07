### Architecture of the micro services created in this tutorial 

<iframe frameborder="0" style="width:100%;height:600px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#G1_4zt303ui6_0TpxQwMu08XfvqN0XpPvU"></iframe>

### Steps

In this step we will build a client application calling the server using the internal DNS entry node-server. The client application is also a server so we can call it.

Change to client directory `cd /root/node-client`{{execute T1}}

Build docker image `docker build -t exampledriven/node-client:v1 .`{{execute T1}}

Run client in kubernetes `kubectl run node-client --port=3000 --image=exampledriven/node-client:v1`{{execute T1}}

Create a service `kubectl expose deployment node-client --type=NodePort --name=node-client`{{execute T1}}

Scale up the client instances  `kubectl scale deployment.apps/node-client --replicas=4`{{execute T1}}

Store kubernetes ip address in a variable `masterip=$(kubectl cluster-info | grep master | grep -o "[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}")`{{execute T1}}

Store service port into variable `clientserviceport=$(kubectl get service | grep node-client | grep -o "[0-9]\{5\}")`{{execute T1}}

See all objects created in Kubernetes `kubectl get all`{{execute T1}}

Observe load balancing in action `watch curl $masterip:$clientserviceport`{{execute T1}}