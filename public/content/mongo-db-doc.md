# MongoDB

1. ## **Theory**

1. SQL(relational) v s
1. NoSQL ()
1. What is MongoDB?
1. Run on JS Engine
1. How does mongoDB work?
1. Non-relational Document based
1. Advantage and Disadvantages
1. BSON
1. MongoDB Structure
1. MongoDB architecture
1. JSON vs BSON
1. MongoDB shell
1. CRUD Operations
1. Cursor, Iterate a Cursor
1. Time to Leave
1. Maximum Document Size : 16Mb
1. **Storage engines**
    1. **types**
        1. WiredTiger
        1. ger engine
        1. In-memory engine
        1. MMAPv1
    1. GridFS
    1. Journal
1. **Data types in MongoDB (BSON)**
    1. ObjectId
        1. timestamp
        1. random value
        1. incrementing counter
    1. String
    1. Int, longInt, Double
    1. Array, Object
    1. Boolean
    1. Date
    1. Decimal128
    1. Regex
    1. Javascript
        1. with scope
        1. without scope
    1. MinKey, MaxKey
    1. Binary data
1. Cursor
    1. cursor methods
    1. \- toArray
    1. \- forEach
    1. cursor.allowPartialResults()
1. **Collection**

    1. ## db

    1. ## db.createCollection(collectionName)

    1. ## show collections

    1. renaming Collection

1. **Documents**
    1. adding new Documents
    1. Nested Documents
        1. advantage
1. **Inserting Document**
1. Insert One and Many
1. what are the additional methods used for inserting
1. **Finding / Querying**
    1. find()+
        1. iterate (it)
        1. pretty()
    1. findOne({ _filter_ })
    1. finding In nested Array
        1. “_field_._field_”
        1. match
        1. exact match
        1. multiple match
    1. Array
        1. finding in specific order
        1. without regard to order
        1. query by array index
        1. query by array length
    1. **Projection**
        1. explicitly include fields
    1. Null, $type: 10, $exists
1. **Filtering**
    1. find( _filter_ )
    1. find( _{filter}, {fieldsToGet}_ )
1. **Method Chaining**
    1. count()
    1. limit()
    1. sort( 1 or \-1 )
    1. skip()
1. **Operators** (denoted by $)
    1. {$gt: number} $gte
    1. $lt, $lte
    1. $eq, $ne
    1. $or $and $not
    1. $in: \[1,2,3\], $nin: \[1,2\]
    1. $all
    1. $set, $unset
    1. $addToSet
    1. **$elemMatch**
    1. $slice
    1. $size
    1. $inc: 1, $inc: \-1
    1. $pull, $push
    1. $each \[ 1, 2 \]
    1. $eq, $ne
    1. $currentDate
    1. $exists
    1. **$expr**
    1. **$cond**
    1. $rename
    1. $min, $max
    1. $mul
    1. $ifNull
    1. $let
    1. **Array Operator**
        1. $push
        1. $each
        1. $pull
        1. $pullAll
        1. $pop
        1. $elemMatch
1. **Deleting**
    1. deleteOne({ _field:value_ })
    1. deleteMany()
    1. remove()
    1. delete vs remove
1. **Updating**
    1. updateOne( {_whichObject_} , {$set: {_field: value, field: value_} } )
    1. **Operators**
        1. $set
        1. $unset
        1. $rename
    1. updateMany()
    1. replaceOne()
    1. incrementing & decrementing
    1. adding and remove from array
    1. upsert
    1. update() vs updateOne()
    1. updateOne vs replaceOne
1. **bulkWrite()**
    1. ordered: false
    1. ordered vs unordered
    1. advantages and disadvantages
1. **Commands**
    1. mongosh
    1. db
    1. show dbs
    1. db.stats
1. **Aggregation**
    1. How does it work
    1. advantages
    1. types of aggregation
    1. distinct
    1. **Aggregate stages**
        1. $addFields
        1. $match
        1. $group
            1. grouping by
            1. \-nested field
            1. \-multiple field
        1. $sort
        1. $set
        1. $count
        1. \- other ways to count
        1. \- client and server side counting
        1. $limit, $skip
        1. $merge
        1. $out
        1. $project
        1. $lookup
        1. $unwind
        1. $facet
        1. $fill
        1. $bucket
            1. $bucketAuto
        1. $densify
        1. $redact
        1. $search
        1. allowDiskUse: true
    1. “$name” vs ”name”
    1. **Accumulator Operators**
        1. $sum, $avg, $max, $min
    1. **Unary Operators**
        1. $type, $lt $gt $or $and $multiply
    1. **Aggregation Pipeline**
        1. How does aggregation pipeline work?
        1. memory limit : 100mb
            1. spill to disk
    1. Batch sizing
    1. Iterator Size
    1. Query routing
    1. **Map Reduce**
        1. for what is it used?
        1. find sum, avg
1. **Indexes**
    1. pros and cons of Indexes
    1. createIndex({ _filed: value_ })
    1. options when creating Index
        1. background: true
        1. unique: true
        1. name: “\<_indexName_\>”
    1. getIndex()
    1. dropIndex(), dropIndexes
    1. reIndex()
    1. rename Index
    1. hiding index
    1. covered query
    1. **Types of Indexes**
        1. Single Field Index
        1. Compound Index
        1. Multikey Index
        1. Text Index
        1. Geospatial, Hashed, Clustered Index
        1. Covered query
        1.
1. **Schema**
    1. pros and cons of using schema
    1. optional schema
    1. validation action
1. **Relationships**
    1. embedding
    1. referencing
    1. one-to-one
    1. one-to-many
    1. one-to-squillions
    1. many-to-many
1. **Replication**

    1. replica set
    1. advantage and disadvantages of replication
    1. **Replication Architecture**
        1. primary and secondary nodes
        1. arbiter
        1. process of election
        1. heartbeat
    1. Process of Election
    1. Replication lag
    1. operation log (oplog)
    1. **Types of replication**
        1. Asynchronous Replication
        1. Synchronous Replication
        1. Majority Commit
        1. etc…

1. **Sharding**
    1. advantages and disadvantages
    1. **Sharding Architecture**
        1. What is Mongos/Router
        1. Config Server
    1. **Types of sharding**
        1. Hashed sharding
        1. Ranged sharding
        1. Zone Sharding
    1. **Shard key**
        1. shard hotspots
        1. normal shard key
        1. hashed shard key
    1. Vertical and horizontal scaling
    1. Zones
    1. mongos
    1. auto balancer
    1. scatter-gather
1. **Cluster**
    1. types of cluster
    1. config servers
1. **Data Modeling**
    1. embedded data model
    1. reference data model
    1. linking vs embedding
1. **Transactions**
    1. How to do transaction
        1. **Session**
        1. startTransaction
        1. abortTransaction
        1. commitTransaction
    1. ACID Transaction
    1. A- Atomicity
    1. C- Consistency
    1. I \- Isolation
    1. D \- Durability
1. Create view in Mongodb
1. CAP Theorem
    1. theorem
    1. C- Consistency
    1. A \- Availability
    1. P \- Particle tolerance
1. **Isolation levels**

    1. Read Concerns
    1. \- local
    1. \- maojiry
    1. \- available
    1. Write Concerns
    1. \- w:1 (Acknowledged)
    1. \- w:0 (Unacknowledged)
    1. \- majority
    1. \- all
    1. \- journaled

1. ## **VS**

    1. $or vs $in
    1. $all vs $in
    1. $elemMatch vs $in
    1. drop() vs remove()
    1. findAndModify() vs findOneAndUpdate()
    1. Primary key vs secondary key
    1. join vs lookup
    1. dot notation vs nested form
    1. $currentDate vs $$NOW
    1. delete() vs remove()
    1. bulkWrite vs InsertMany
    1. replace vs update
    1. shard vs node vs cluster
    1. Aggregation Pipeline vs Map Reduce
    1. vertical scalability vs horizontal scalability
    1. load balancer vs sharding
    1. odm vs driver
    1. stage operator vs accumulator operator
    1. normal shard key vs hashed shard key
    1. aggregate(\[$count:”tota”\]) vs find({}).count()
    1. replication vs replica set
    1. transaction vs query
    1. scaling up vs scaling down vs scaling out?
    1. config servers vs mongos
    1. load balancer vs auto balancer
    1. countdocument vs count

1. What is a MongoDB driver?
1. Capped collection and it’s advantages
1. Profiler
1. Explain
1. Soft deleting

1. ## **Interview Question**

1. What to do when your quireing becomes slow?
1. What to do when your files are getting very big?
1. How to condense large volumes of data?
1. How to search for text in MongoDB?
1. How does MongoDB schema change?
1. How can we Backup and Restore in MongoDB?
1. What are the pros and cons of Normalising Data in MongoDB

1. ## **Good to Know**

1. Atomicity
1. Type Bracketing
1. Dot Notation
1. Cursor behaviour
1. Aggregation Pipeline
1. Retryable Writes and Reads
1. MongoDB CRUD Concepts
1. B-Tree
1. ACID compliance
1. Mongoose
1. Network Components
    1. load balancer
    1. firewall
1. **CAP Theorem**
    1. consistency
    1. availability
    1. partition tolerance
1. Firewall
1. **Mongo Utilities**
    1. mongoexport
    1. mongoimport
    1. mongodump
    1. mongorestore
    1. mongostat
    1. mongotop
    1. mongooplog
1. Clustered collections
1. WAL
