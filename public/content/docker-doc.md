# Docker

1. What, Why, When
1. Architecture
    1. client and server
    1. \- server \=\> docker engine
1. Container
    1. kernel namespaces
    1. C groups
    1. Container vs Virtual machine
1. Images & Container
    1. image vs container
    1. Isolated process
1. **Images**
    1. Image layers
    1. \- base image layer
    1. \- instruction layers
    1. \- writable container layer
    1. Layer caching
1. docker run \<ubuntu\> vs docker pull \<ubuntu\>
1. Port mapping
1. Data persistence
1. DB Migration
1. Bind mounts.
1. run, start, rm
1. \-t, \-p

1. ## **Commands**

1. docker init
1. docker tag
1. docker build
    1. \-t
    1. buildx
1. docker run
    1. \--name
    1. \-it
    1. \-e
    1. \-d
    1. \-p
        1. port mapping
    1. \--net
    1. \--rm
1. docker container
    1. ls
    1. stop
    1. \-t
    1. prune
    1. rm
        1. \-f
1. docker logs \<container\>
    1. \--follow/ \-f
1. docker image
    1. ls
    1. history
        1. \--no-trunc
1. docker network
    1. ls
    1. create \<name\>
        1. \-d
        1. \--subnet
        1. \--gateway
1. **Manage containers**
    1. Docker container ls || docker ps
    1. Docker container ls \-a || docker ps \-a
    1. \* Start
    1. \* Stop
    1. \* Restart
    1. \* rm
    1. Docker system prune \-a
1. **Network commands**
    1. Docker network ls
    1. Docker inspect bridge
1. **Volume**
    1. types
    1. \- bind mounts.
    1. \- volume mounts/ named volumes
    1. bind vs named mounts
    1. scratch space
    1. Volume claim
    1. docker volume
        1. create
        1. inspect
    1. docker rm \-f
1. dockerignore
1. **Docker hub**
    1. docker
        1. pull
        1. push
        1. rmi
1. **Docker compose**
    1. docker compose
        1. up
        1. down
        1. watch
        1. ps
    1. services
        1. image
        1. ports
        1. environment
        1. restart
            1. always
            1. on-failure
            1. unless-stopped
        1. depends_on
        1. resources
            1. limits
            1. reservations
        1. volume mapping
            1. read only, write only
    1. networks
    1. secrets
    1. volumes
        1. driver
1. **Dockerfile**
    1. FROM
    1. COPY
    1. WORKDIR
    1. RUN
    1. CMD
    1. EXPOSE
    1. ENTRYPOINT
    1. ENV
    1. ARG
    1. USER
    1. LABEL
    1. RUN VS CMD
1. **Docker network**
    1. Bridge
    1. Host
    1. None
    1. overlay
    1. macvlan
    1. IPvlan
1. Docker daemon

#
