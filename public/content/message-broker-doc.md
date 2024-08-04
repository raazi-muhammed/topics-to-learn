# Message Broker

## **Kafka**

1. used as key value but stored as binary in kafka
1. default port
1. serialisation and deserialization
1. pros and cons
1. Kafka cluster
    1. Fault Tolerance
    1. Scalability
    1. Distributed Processing
1. **Kafka Broker**
    1. topics
        1. compacted topics
    1. partitions
        1. leader
        1. follower
        1. replication
            1. replication factor
            1. key
    1. segments
1. **Producer**
    1. record
        1. header
        1. key
        1. value
        1. timestamp
    1. retention period
    1. ack /nack
        1. no acks
        1. leader acks
        1. all acks
1. **Consumer**
    1. Queue vs Pub Sub
    1. Consumer group
1. Offset
1. Connectors
1. At most once
1. At least once
1. Exactly once
1. Exactly-Once Semantics
    1. Idempotent
    1. Two-Phase Commit
    1. alt
1. Persistent storage
1. Steam processing
1. Distributed system
    1. leader
    1. follower
    1. zoo keeper
        1. Metadata Management
        1. Leader Election
        1. Synchronisation
        1. Heartbeats and Timeouts
        1. Monitoring
        1. default port
        1. gossip
1. long polling
1. Kafka Connect

##

## **RabbitMQ**

1. TCP
1. HTTPv2
1. AMQP
1. RabbitMQ server
    1. default port
    1. Exchange Queues
1. Heartbeats
1. Connection pool
1. Channels
    1. Multiplexing
    1. Concurrency
1. Message TTL
1. Message Acknowledgment
    1. **Strategies**
    1. Automatic Acknowledgment (Ack)
    1. Positive Acknowledgment
    1. Negative Acknowledgment (Nack)
    1. Rejection with Requeue
    1. Rejection without Requeue
1. **Exchanges**
    1. Fanout exchange
        1. pros and cons
        1. uses
    1. Direct exchange
        1. pros and cons
        1. uses
    1. Header exchange
        1. pros and cons
        1. uses
    1. Topics exchange
        1. pros and cons
        1. uses
    1. Dead Letter Exchanges and Queues
1. Polyglot persistence
1. Durability
    1. Durable Queues
    1. Persistence message
    1. Combined Durability
    1. rabbitMQ
1. Routing Key
1. Request response
    1. architecture
    1. breaks
    1. pros and cons
1. Publish subscribe (pub/sub) model
    1. Queue/Channels/Topics
    1. Publisher/producer
    1. Consumer
    1. pros and cons
1. Multiplexing
1. Channel
1. Push model

## **gRPC**

1. why?
1. http
1. protobuffer
1. Unary gRPC
1. Server streaming
1. Client streaming
1. Bidirectional
