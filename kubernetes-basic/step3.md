Run server in kubernetes `kubectl run node-server --port=3000 --image=exampledriven/node-server:v1`{{execute T1}}

the above single command created the following 
- Deployment : Describes and maintains the desired state of the deployed pods
- Pod : the actual server
- Replica sets : controls and maintains the desired amount of server instances

To query all this run  `kubectl get all`{{execute T1}}

Create a service `kubectl expose deployment node-server --type=NodePort --name=node-server`{{execute T1}}

The above command created
- a load balancer pointing to node-server instnces
- a DNS entry "node-service" pointing to the load balancer
- a port mapping forwarding the kubernetes internal network and the host machine 

To query all this run  `kubectl get all`{{execute T1}}

Store kubernetes ip address in a variable `masterip=$(kubectl cluster-info | grep master | grep -o "[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}")`{{execute T1}}

Store service port into variable `serviceport=$(kubectl get service | grep -o "[0-9]\{5\}")`{{execute T1}}

Connect to the server `curl $masterip:$serviceport`{{execute T1}}

To create more node server instances  `kubectl scale deployment.apps/node-server --replicas=4`{{execute T1}}

See the changes `kubectl get all`{{execute T1}}

Connect to the server and see load balancing `watch curl $masterip:$serviceport`{{execute T1}}





