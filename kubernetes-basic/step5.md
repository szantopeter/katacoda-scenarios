### Clean up  

Delete node server `kubectl delete deployment.apps/node-server`{{execute T1}}

Delete node client `kubectl delete deployment.apps/node-client`{{execute T1}}

Delete node server service `kubectl delete service/node-client`{{execute T1}}

Delete node client service `kubectl delete service/node-server`{{execute T1}}

Check state`kubectl get all`{{execute T1}}

### Deploy

Check state`kubectl apply -f example.yml`{{execute T1}}

Check state`watch kubectl get all`{{execute T1}}

Check state`kubectl delete -f example.yml`{{execute T1}}

Check state`watch kubectl get all`{{execute T1}}
