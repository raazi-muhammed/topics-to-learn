# Microservice

## **Concepts & Theory**

1. What is a service?
1. Monolithic arch
    1. pros and cons
1. Microservice arch
    1. pros and cons
1. **Monolithic vs Microservice**
    1. deployment, scalability, reliability, development, flexibility, debugging
1. Security
1. **Cloud computing**
    1. Public IP address
    1. On-premises
    1. Iaas, Cass, Pass, Faas (Server less computer), Saas
    1. Private could
    1. Hybridge cloud
1. Scaling
1. Blue Green Deployment
1. Cloud Native vs Cloud Ready
1. Event-Driven Architecture
    1. Event producer
    1. Event broker
    1. consumer
    1. pub/sub
    1. eventual consistency
    1. cache layer
    1. idempotent
1. 12 Factor App
    1. Codebase
    1. Dependencies
    1. Config
    1. Backing services
    1. Build, release, run
    1. Processes
    1. Port binding
    1. Concurrency
    1. Disposability
    1. Dev/prod parity
    1. Logs
    1. Admin processes
1. Load balancing
    1. Round robin
    1. Least connection
    1. IP hash
1. Service Registry
1. Failed fast
1. Service Discovery
1. **Tools**
    1. os
    1. language
    1. api management
        1. postman
    1. messaging
        1. kafka
        1. rabbitMQ
    1. toolkits
        1. fabric8
        1. seneca
    1. orchestration
        1. kubernetes
        1. Istio
    1. monitoring
        1. prometheus
        1. logstash
    1. serverless tools
        1. claudia
        1. AWS lambda
1. **Principles behind microservices**
    1. Independent and autonomous service
    1. Scalability
    1. Decentralisation
    1. Resilient services
    1. Real time load balancing
    1. Availability
    1. CICD
    1. Continuous monitoring
    1. Seamless API integration
    1. Isolation from failures
    1. Auto provisioning
1. **Security**
    1. Defence in depth mechanism
    1. Token and API gateway
    1. Distributed tracing
    1. First session
    1. Mutual SSL
    1. OAuth
1. API gateway
    1. client performance
    1. security
    1. rate limiting
    1. monitoring logging
    1. BFF
1. SOA vs Microservices
1. **Communication**
    1. Types
        1. synchronous blocking communication
        1. asynchronous non blocking communication
    1. Request response
        1. REST over HTTP
        1. RPC
    1. Event driven
        1. kafka

## **Design Patterns**

1. need?
1. Aggregator
1. **API gateway**
1. Chained or chain of responsibility
1. Asynchronous messaging
1. Orchestration vs Choreography
1. **Database pattern**
    1. Database Per Service
    1. Shared Database
1. Event sourcing
1. Branch
1. Multi-tenant
    1. pros and cons
1. **CQRS**
1. **Circuit breaker**
1. SAGA
    1. Choreography
    1. Orchestration
1. Decomposition
    1. Vine or Strangle
1. **Database**
    1. Decentralised Data Management
        1. pros and cons
    1. **Data Consistency in microservice**
        1. Saga Pattern
        1. Event-Driven Architecture
        1. CQRS
        1. Idempotent Operations
        1. Consistency Models
    1. Database per Microservice
    1. Shared Database
    1. Data Virtualization
    1. Distributed Data Mesh
1. **CI/CD**
    1. Github actions
    1. pros and cons
    1. running in parallel
    1. **Testing**
        1. unit tests, integration tests, and end-to-end tests.
    1. Artefact Repository
        1. JFrog
1. **Github actions**
    1. Workflows
    1. Events
    1. Jobs
    1. Actions
    1. Runners
    1. Using variables in your workflows
    1. Sharing data between jobs
        1. artefacts
            1. actions/download-artifact
    1. Literals
    1. Contexts
        1. uses
        1. Context availability
        1. github context
        1. env context
        1. var context
        1. job context
    1. Polyglot Persistence
1. **\- commands**
    1. name
    1. on
        1. push
            1. branches
    1. jobs
        1. needs
        1. steps
        1. uses
        1. with
        1. run
        1. if
        1. matrix
        1. outputs
1. **Transactions in microservice**
    1. Two-phase commit
        1. voting phase
        1. commit phase
        1. pros and cons
    1. SAGA
        1. backward recovery
        1. forward recovery
    1. correlation id
    1. imp of logging and monitoring

#

#
