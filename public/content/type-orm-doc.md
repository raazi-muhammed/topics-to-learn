# TypeORM Docs

1. `DataSource`[^1]
    1. intialize
    2. destroy
    3. .manager
    4. .getRepository()
    5. `DataSourceOptions`
        1. type
        2. extra
        3. entities
        4. migrations
        5. synchronize[^2]
            1. schema:sync
        6. [other and defenitions](https://typeorm.io/data-source-options#common-data-source-options)
        7. [Example](https://typeorm.io/data-source-options#data-source-options-example)
    6. `Entity`[^3]
        1. alternative table name
        2. `@Column`
        3. `@PrimaryColumn()`
        4. `@PrimaryGeneratedColumn()`
            1. uuid
        5. `save()`[^4]
        6.

### Links

1. [DataSource](https://typeorm.io/data-source)

[^1]: Your interaction with the database is only possible once you setup a `DataSource`. TypeORM's `DataSource` holds your database connection settings and establishes initial database connection or connection pool depending on the RDBMS you use.
[^2]: `synchronize` - Indicates if database schema should be auto created on every application launch. Be careful with this option and don't use this in production - otherwise you can lose production data. This option is useful during debug and development. As an alternative to it, you can use CLI and run schema:sync command. Note that for MongoDB database it does not create schema, because MongoDB is schemaless. Instead, it syncs just by creating indices.
[^3]: Entity is a class that maps to a database table (or collection when using MongoDB). You can create an entity by defining a new class and mark it with `@Entity()`:
[^4]: When you save entities using `save` it always tries to find an entity in the database with the given entity id (or ids). If id/ids are found then it will update this row in the database. If there is no row with the id/ids, a new row will be inserted.
