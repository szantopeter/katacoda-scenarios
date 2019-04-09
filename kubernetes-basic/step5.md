### Clean up  

Delete node server `kubectl delete deployment.apps/node-server`{{execute T1}}

Delete node client `kubectl delete deployment.apps/node-client`{{execute T1}}

Delete node server service `kubectl delete service/node-client`{{execute T1}}

Delete node client service `kubectl delete service/node-server`{{execute T1}}

Check state`kubectl get all`{{execute T1}}

### Deploy

Change directory `cd ~`{{execute T1}}

Look at the deployment descriptor `less example.yml`{{execute T1}}

Create objects described in the deployment descriptor `kubectl apply -f example.yml`{{execute T1}}

Check state`watch kubectl get all`{{execute T1}}

### Deploy

Store kubernetes ip address in a variable `masterip=$(kubectl cluster-info | grep master | grep -o "[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}")`{{execute T1}}

Store service port into variable `clientserviceport=$(kubectl get service | grep node-client | grep -o "[0-9]\{5\}")`{{execute T1}}

Observe load balancing in action `watch curl $masterip:$clientserviceport`{{execute T1}}

## Undeploy

Check state`kubectl delete -f example.yml`{{execute T1}}

Check state`watch kubectl get all`{{execute T1}}
