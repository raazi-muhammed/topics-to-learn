# SQL

1. ### **Theory**

1. SQL vs NoSQL (Relational vs non-relational)
1. Web-scaled
1. When to use SQL and NoSQL
1. Expression, Statement, Operators
1. **Data types SQL**
    1. null, bit
    1. int, real / float
    1. char, varchar, text
    1. boolean
    1. date, datetime, timestamp
    1. xml/json
    1. – char vs varchar vs text
    1. – datetime vs timestamp
    1. – JSON vs JSONB
1. **Operators**
1. Arithmetic, Logical, Comparison, Bitwise
1. Primitives: Integer, Numeric, String, Boolean
1. Structured: Date/Time, Array, Range / Multirange, UUID
1. Document: JSON/JSONB, XML, Key-value (Hstore)
1. Geometry: Point, Line, Circle, Polygon
1. Customizations: Composite, Custom Types

1. ### **Postgres**

1. **complex queries**
    1. Aggregation
    1. Subquery
    1. Window Function
1. **foreign keys**
1. **triggers**
    1. Trigger Timing
    1. \- BEFORE and AFTER
    1. \- Uses
1. **updatable views**
1. **transaction integrity**
1. **multiversion concurrency control**
1. **functions**
    1. Stored Procedures
    1. Window functions
    1. Aggregate functions
1. **operators**
1. **aggregate functions**
1. **index methods**
1. **procedural language**
1. Forks
1. client/server model
1. **Data types Unique to Postgres**
    1. interval
    1. point
    1. bigserial
    1. etc…
1. Database cluster
1. **Constraints**

    1. UNIQUE
    1. NOT NULL
    1. PRIMARY KEY
        1. as UUID
    1. FOREIGN KEY
    1. CHECK (\<condition\>)
    1. \- Adding & removing constraints after creating table

1. ### **Commands**

    1. list db
    1. to connect
    1. list tables
    1. Move to super
    1. list specific table
    1. List current table

1. Creating
    1. Database
    1. Table
1. Drop
    1. Drop DB
    1. Drop Table
    1. Drop constraints
1. Commands

    1. – or /\* \*/
    1. **Database migration**
        1. Add, Delete, Migration
        1. Up migration
        1. Dow migration

1. ### **Functions**

    1. SELECT
        1. LIMIT
        1. FETCH
        1. OFFSET
        1. AS
        1. DISTINCT
        1. GROUP BY
            1. HAVING
            1. GROUPING SETS
            1. ROLLUP
            1. CUBE
        1. Having vs Where
        1. Limit vs Fetch
    1. FROM
    1. WHERE
        1. AND, OR
        1. LIKE, ILIKE
        1. BETWEEN
        1. IN
        1. IS NULL, IS NOT NULL
    1. ORDER BY
        1. DESC, ASC
    1. DELETE
    1. DELETING FOREIGN KEY
        1. CASCADE
    1. UPDATE
        1. SET
    1. RENAME COLUMN
    1. **JOIN**
        1. INNER JOIN
            1. ON
        1. LEFT JOIN
        1. RIGHT JOIN
        1. FULL JOIN (FULL OUTER JOIN)
        1. SELF JOIN
        1. CROSS JOIN
        1. NATURAL JOIN
    1. **VIEWS**
        1. Pros and Cons
        1. CREATE VIEW
        1. Materialized View
            1. Write amplification
    1. UNION
    1. COALESCE
    1. NULLIF
    1. Index
        1. multi index

1. AUTO_INCREMENT
1. ON CONFLICT
    1. DO NOTHING
    1. **Upserting**
    1. \- DO UPDATE
        1. EXCLUDED
1. **Date functions**
    1. INTERVAL vs AGE
1. **Aggregate functions**
    1. AVG, MIN, MAX, SUM, ROUND, COUNT, CONCAT
1. **Scalar Functions**
    1. LCASE, CASE, LEN, MID, ROUND, NOW, FORMAT ,
    1. INITCAP , LEFT , RIGHT , CONCAT , ABS , CEIL , FLOOR,
    1. UPPER AND LOWER in psql.
1. Aggregate vs Scalar
1. **Window function**
    1. OVER
    1. \- PARTITION BY, RANK, LEAD, LAG
    1. CASE
1. **SQL Commands**
    1. **DDL**
        1. CREATE, ALTER, DROP, TRUNCATE
        1. DROP vs TRUNCATE
    1. **DML**
        1. INSERT, SELECT, UPDATE, DELETE
    1. **DCL**  
       GRANT, REVOKE
    1. **TCL**
        1. COMMIT
        1. ROLLBACK
        1. SAVE POINT
    1. **DQL**
        1. SELECT
1. **3-Schema architecture**
    1. Internal level
    1. Conceptual level
    1. External level
1. BIGINT VS BIGSERIAL
1. **Combining queries**
    1. UNION, UNION ALL
    1. INTERSECT, INTERSECT ALL
    1. EXCEPT, EXCEPT ALL
1. **Normalisation**
    1. **Levels**
        1. 1NF, 2NF, 3NF etc..
        1. BCNF
    1. **Anomalies**
    1. \- Insertion anomalies
        1. Data redundancy
        1. Missing data
    1. \- Deletion anomalies
        1. Losing data
    1. \- Updation anomalies
        1. inconsistency
        1. Updating values on so many records unnecessarily
1. **Relationship**
    1. one to one
    1. one to many
    1. many to may
1. **Transaction & ACID**
1. **\- Transaction**
    1. COMMIT
    1. ROLLBACK
    1. SAVE POINT
        1. RELEASE SAVEPOINT
    1. LOCK
        1. Exclusive Locks (X-Locks)
        1. Shared Locks (S-Locks)
        1. Update Locks (U-Locks)
        1. Intent Locks
        1. Read and Write Locks
1. **\- ACID**
    1. \- Atomicity
    1. \- Consistency
        1. Consistency in data
        1. Consistency in reads
    1. \- Isolation
        1. **Read phenomena**
        1. \- Dirty reads
        1. \- Non-repeatable reads
        1. \- Phantom reads
            1. Serialotions
        1. \- (Lost updates)
        1. **Isolation level**
        1. \- Read uncommitted
        1. \- Read committed
        1. \- Repeatable Reads
        1. \- Transactions are Serialized
    1. \- Durability
    1. How to implement ACID properties
1. EXPLAIN
1. Heap Scan
1. Parallel Scan
1. Planner

1. ### **Other theory and functions**

1. COPY
1. OLTP
1. MUCC

1. ### **Pendings**

1. Delete vs truncate
1. candidate key vs super key
1. stored procedure
1. ER diagram.
1. Practice nested queries.
