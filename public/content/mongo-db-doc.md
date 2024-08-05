# MongoDB

### Theory

1. SQL(relational) v s
2. NoSQL ()
3. What is MongoDB?
4. Run on JS Engine
5. How does mongoDB work?
6. Non-relational Document based
7. Advantage and Disadvantages
8. BSON
9. MongoDB Structure
10. MongoDB architecture
11. JSON vs BSON
12. MongoDB shell
13. CRUD Operations
14. Cursor, Iterate a Cursor
15. Time to Leave
16. Maximum Document Size : 16Mb
17. Storage engines
    1. types
        1. WiredTiger
        2. ger engine
        3. In-memory engine
        4. MMAPv1
    2. GridFS
    3. Journal
18. Data types in MongoDB (BSON)
    1. ObjectId
        1. timestamp
        2. random value
        3. incrementing counter
    2. String
    3. Int, longInt, Double
    4. Array, Object
    5. Boolean
    6. Date
    7. Decimal128
    8. Regex
    9. Javascript
        1. with scope
        2. without scope
    10. MinKey, MaxKey
    11. Binary data
19. Cursor
    1. cursor methods
    2. \- toArray
    3. \- forEach
    4. cursor.allowPartialResults()
20. Collection
    1. db
    2. db.createCollection(collectionName)
    3. show collections
    4. renaming Collection
21. Documents
    1. adding new Documents
    2. Nested Documents
        1. advantage
22. Inserting Document
23. Insert One and Many
24. what are the additional methods used for inserting
25. Finding / Querying
    1. find()
        1. iterate (it)
        2. pretty()
    2. `findOne({<filter>})`
    3. finding In nested Array
        1. `field.field`
        2. match
        3. exact match
        4. multiple match
    4. Array
        1. finding in specific order
        2. without regard to order
        3. query by array index
        4. query by array length
    5. Projection
        1. explicitly include fields
    6. Null, `$type: 10`, `$exists`
26. Filtering
    1. `find(<filter>)`
    2. `find({<filter>}, {<fieldsToGet>})`
27. Method Chaining
    1. `count()`
    2. `limit()`
    3. `sort( 1 or \-1 )`
    4. `skip()`
28. Operators (denoted by $)
    1. {$gt: number} $gte
    2. $lt, $lte
    3. $eq, $ne
    4. $or $and $not
    5. $in: \[1,2,3\], $nin: \[1,2\]
    6. $all
    7. $set, $unset
    8. $addToSet
    9. $elemMatch
    10. $slice
    11. $size
    12. $inc: 1, $inc: \-1
    13. $pull, $push
    14. $each \[ 1, 2 \]
    15. $eq, $ne
    16. $currentDate
    17. $exists
    18. $expr
    19. $cond
    20. $rename
    21. $min, $max
    22. $mul
    23. $ifNull
    24. $let
    25. Array Operator
        1. $push
        2. $each
        3. $pull
        4. $pullAll
        5. $pop
        6. $elemMatch
29. Deleting
    1. `deleteOne({<field:value>})`
    2. deleteMany()
    3. remove()
    4. delete vs remove
30. Updating
    1. `updateOne( {<whichObject>} , {$set: {<field:value>, <field:value>}} )`
    2. Operators
        1. `$set`
        2. `$unset`
        3. `$rename`
    3. updateMany()
    4. replaceOne()
    5. incrementing & decrementing
    6. adding and remove from array
    7. upsert
    8. update() vs updateOne()
    9. updateOne vs replaceOne
31. bulkWrite()
    1. ordered: false
    2. ordered vs unordered
    3. advantages and disadvantages
32. Commands
    1. mongosh
    2. db
    3. show dbs
    4. db.stats
33. Aggregation
    1. How does it work
    2. advantages
    3. types of aggregation
    4. distinct
    5. Aggregate stages
        1. $addFields
        2. $match
        3. $group
            1. grouping by
                1. nested field
                2. multiple field
        4. $sort
        5. $set
        6. $count
            1. other ways to count
            2. client and server side counting
        7. $limit, $skip
        8. $merge
        9. $out
        10. $project
        11. $lookup
        12. $unwind
        13. $facet
        14. $fill
        15. $bucket
            1. $bucketAuto
        16. $densify
        17. $redact
        18. $search
        19. allowDiskUse: true
    6. “$name” vs ”name”
    7. Accumulator Operators
        1. $sum, $avg, $max, $min
    8. Unary Operators
        1. $type, $lt $gt $or $and $multiply
    9. Aggregation Pipeline
        1. How does aggregation pipeline work?
        2. memory limit : 100mb
            1. spill to disk
    10. Batch sizing
    11. Iterator Size
    12. Query routing
    13. Map Reduce
        1. for what is it used?
        2. find sum, avg
34. Indexes
    1. pros and cons of Indexes
    2. `createIndex({<field: value>})`
    3. options when creating Index
        1. background: true
        2. unique: true
        3. name: “\<_indexName_\>”
    4. getIndex()
    5. dropIndex(), dropIndexes
    6. reIndex()
    7. rename Index
    8. hiding index
    9. covered query
    10. Types of Indexes
        1. Single Field Index
        2. Compound Index
        3. Multikey Index
        4. Text Index
        5. Geospatial, Hashed, Clustered Index
        6. Covered query
35. Schema
    1. pros and cons of using schema
    2. optional schema
    3. validation action
36. Relationships
    1. embedding
    2. referencing
    3. one-to-one
    4. one-to-many
    5. one-to-squillions
    6. many-to-many
37. Replication
    1. replica set
    2. advantage and disadvantages of replication
    3. Replication Architecture
        1. primary and secondary nodes
        2. arbiter
        3. process of election
        4. heartbeat
    4. Process of Election
    5. Replication lag
    6. operation log (oplog)
    7. Types of replication
        1. Asynchronous Replication
        2. Synchronous Replication
        3. Majority Commit
        4. etc…
38. Sharding
    1. advantages and disadvantages
    2. Sharding Architecture
        1. What is Mongos/Router
        2. Config Server
    3. Types of sharding
        1. Hashed sharding
        2. Ranged sharding
        3. Zone Sharding
    4. Shard key
        1. shard hotspots
        2. normal shard key
        3. hashed shard key
    5. Vertical and horizontal scaling
    6. Zones
    7. mongos
    8. auto balancer
    9. scatter-gather
39. Cluster
    1. types of cluster
    2. config servers
40. Data Modeling
    1. embedded data model
    2. reference data model
    3. linking vs embedding
41. Transactions
    1. How to do transaction
        1. Session
        2. startTransaction
        3. abortTransaction
        4. commitTransaction
    2. ACID Transaction
        1. A - Atomicity
        2. C - Consistency
        3. I - Isolation
        4. D - Durability
42. Create view in Mongodb
43. CAP Theorem
    1. theorem
    2. C - Consistency
    3. A - Availability
    4. P - Particle tolerance
44. Isolation levels
    1. Read Concerns
        1. local
        2. maojiry
        3. available
    2. Write Concerns
        1. w:1 (Acknowledged)
        2. w:0 (Unacknowledged)
        3. majority
        4. all
        5. journaled

### VS

1. $or vs $in
2. $all vs $in
3. $elemMatch vs $in
4. drop() vs remove()
5. findAndModify() vs findOneAndUpdate()
6. Primary key vs secondary key
7. join vs lookup
8. dot notation vs nested form
9. $currentDate vs $$NOW
10. delete() vs remove()
11. bulkWrite vs InsertMany
12. replace vs update
13. shard vs node vs cluster
14. Aggregation Pipeline vs Map Reduce
15. vertical scalability vs horizontal scalability
16. load balancer vs sharding
17. odm vs driver
18. stage operator vs accumulator operator
19. normal shard key vs hashed shard key
20. aggregate(\[$count:”tota”\]) vs find({}).count()
21. replication vs replica set
22. transaction vs query
23. scaling up vs scaling down vs scaling out?
24. config servers vs mongos
25. load balancer vs auto balancer
26. countdocument vs count
27. What is a MongoDB driver?
28. Capped collection and it’s advantages
29. Profiler
30. Explain
31. Soft deleting

### Interview Question

33. What to do when your quireing becomes slow?
34. What to do when your files are getting very big?
35. How to condense large volumes of data?
36. How to search for text in MongoDB?
37. How does MongoDB schema change?
38. How can we Backup and Restore in MongoDB?
39. What are the pros and cons of Normalising Data in MongoDB

### Good to Know

41. Atomicity
42. Type Bracketing
43. Dot Notation
44. Cursor behaviour
45. Aggregation Pipeline
46. Retryable Writes and Reads
47. MongoDB CRUD Concepts
48. B-Tree
49. ACID compliance
50. Mongoose
51. Network Components
    1. load balancer
    2. firewall
52. CAP Theorem
    1. consistency
    2. availability
    3. partition tolerance
53. Firewall
54. Mongo Utilities
    1. mongoexport
    2. mongoimport
    3. mongodump
    4. mongorestore
    5. mongostat
    6. mongotop
    7. mongooplog
55. Clustered collections
56. WAL
