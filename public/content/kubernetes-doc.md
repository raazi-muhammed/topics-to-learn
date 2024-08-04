# Kubernetes

![][image3]

1. aka k8s
1. pros
    1. other pros from doc
1. imperative vs declarative
1. self heading/ auto-heal
1. scaling, auto-scale
    1. HorizontalPodAutoscaler
1. cluster
1. context
1. namespaces
1. annotation
1. namespaces vs annotation vs labels
1. Finalizers
1. Node
    1. master node
    1. worker node
    1. node pool
    1. Node status
    1. Node heartbeats
    1. Node controller
        1. what it does
        1. CIDR block
    1. Node topology
    1. Graceful node shutdown
        1. grace period
        1. non-graceful shutdown
1. **Pod**
    1. communicate via
    1. ephemeral
    1. atomic
    1. scaling
    1. **Pods life cycle**
        1. when creating
        1. when deleting
            1. grace period
    1. **Pod state**
        1. pending
        1. running
        1. succeeded
        1. failed
        1. unknow
        1. CrashLoopBackOff
    1. init container
    1. **Multi container pods**
        1. sidecar pattern
        1. ambassador pattern
        1. adaptor pattern
1. Container
    1. Images
    1. \- Serial and parallel image pulls
    1. \- image pull policy
    1. Container Environment
    1. Container Lifecycle Hooks
        1. PostStart
        1. PreStop
1. Kubelet
1. Selectors
    1. metadata \> labels
    1. spec \> selector
1. **Workloads**
    1. pod
    1. replicaSet
        1. self-heading
        1. template
    1. deployment
        1. replicas
        1. revisionHistoryLimit
        1. **Strategy**
            1. **RollingUpdate**
            1. \- maxSurge
            1. \- maxUnavailable
            1. \- default
            1. \- rollback
            1. \- rollout
            1. **Recreate**
    1. daemonSet
        1. daemon controller
        1. uses
        1. spec \> toleration
    1. statefulSet
        1. persistent identifier
        1. creation & deletion
        1. uses
        1. headless service
    1. job, cron job
    1. replicaSet vs deployment
    1. pods vs deployment
1. Volumes
    1. persistent volume
        1. claim
        1. HostPath
        1. drawback
        1. reclaim policies
            1. delete (default)
            1. retain
        1. access modes
            1. ReadWriteMany
            1. ReadOnlyMany
            1. ReadWriteOnce
        1. states
            1. available
            1. bound
            1. released
            1. failed
    1. storage class
    1. static and dynamic
1. Objects
1. ConfigMap
    1. static
    1. solve static with volume
1. Secret
    1. type
1. **Service**
    1. clusterIP
        1. port
        1. targetPort
    1. nodePort
    1. load balancer
        1. L4
        1. round robin
    1. ingress
        1. L7
1. NodePort
1. **k8s Cluster arch**
    1. **Node**
        1. container runtime
            1. containerized
            1. CRI-O
        1. kubelet
        1. kube proxy
    1. **Control Plane / Master node**
        1. kube-api server
        1. kube-scheduler
            1. factor when scheduling
        1. Kube controller manager
            1. built-in controllers
            1. Node controller
            1. job controller
            1. endpointSlice controller
            1. serviceAccount controller
        1. Cloud controller manager
        1. ETCD
        1. **Addons**
        1. \- DNS
        1. \- WEBUI (dashboard)
        1. \- cluster level logging
        1. \- container resource monitoring
1. Cluster \> Node \> pod \> container
1. CRI
1. Garbage Collection
1. Mixed Version Proxy
1. KubeCTL
1. Minikube
    1. rollout
1. Open Service Broker.
1. Ingress
1. Docker Swarm vs Kubernetes

1. ### **Security**

1. **Image**
    1. Untrusted registries
    1. Vulnerabilities in tools of OS or libraries
1. Authentication & Authorization
1. practices
    1. use linear images
    1. image scanning
    1. don’t use root user
    1. manage user and permission
        1. RBAC
1. statefulSet

    1. master
    1. slave

1. ### **Yaml**

1. apiVersion
1. kind
1. metdat
    1. name
    1. label
    1. namespace
1. spec

    1. containers

1. ### **Commands k8s**

    1. alias k=kubernetes
    1. k get
        1. pods
        1. svc
        1. deploy
    1. k delete \-f \<deployment.yaml\> \-f \<service.yaml\>
    1. k exec \<pod\> – nslookup \<svc\>

1. k config
    1. current-context
    1. get-contexts
    1. use-context \<name\>
    1. delete-context \<name\>
1. namespace
    1. k get ns or namespace
    1. k create ns \<name\>
    1. k delete ns \<name\>
    1. k config set-context \--current \--ns=\<namespace\>
    1. k get pods \-n \<namespace\>
1. node
    1. k get nodes
    1. k describe node
1. Probes

    1. startup
    1. readiness
    1. liveness

1. ## **Good to know**

1. grep
1. docker compose watch \- [https://www.youtube.com/live/I-htDVxmFGM?si=5Um3NCnMi0BeAgCz](https://www.youtube.com/live/I-htDVxmFGM?si=5Um3NCnMi0BeAgCz)
1. chroot
1. Service Mesh

#
