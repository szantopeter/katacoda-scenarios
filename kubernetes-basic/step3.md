Run server in kubernetes `kubectl run node-server --expose=true --port=8080 --image=exampledriven/node-server:v1`{{execute T1}}

the above single command created the following 
- Deployment : Describes and maintains the desired state of the deployed pods
- Pod : the actual server
- Service : an internal kubernetes load balancer and a DNS entry named node-server pointing to the load balancer
- Replica sets : controls and maintains the desired amount of server instances

To query all this run  `kubectl get all`{{execute T1}}

To create two node server instances  `kubectl scale deployment.apps/node-server --replicas=2`{{execute T1}}

See the changes `kubectl get all`{{execute T1}}

Connect to the server `curl localhost:8080`{{execute T1}}

Why is it failing?






