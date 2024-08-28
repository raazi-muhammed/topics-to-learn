# NestJS

### High Level

1. What
2. Why use NestJS
3. Story of NestJS[^1]
4. Platform agnostics
5. We can build
    1. REST API
    2. Micro services
    3. Web sockets
    4. GraphQL
6. Bootstrap
7. Dependency injections
8. **Decorators**
    1. Decorator factor
    2. TS vs JS
    3. Call, apply, bind
    4. This context in different functions

### NestCLI

1. `npm i -g @nestjs/cli`
2. `nest new`
3. `nest g co` / `nest generate controller`
    1. `--no-spec`[^2]
    2. file_path
    3. `--dry-run`[^3]
4. `nest g s`
5. `nest g module <name_of_module>`

### Theory

1. **Module**
    1. `@Module()`
        1. controller
        2. exports
        3. imports
        4. providers
    2. Types
        1. Feature modules
        2. Global modules
        3. Third party modules
2. **Controllers**
    1. `@<HTTP Methods>`
    2. params
        1. path params - `@Param()`
        2. query params - `@Query()`
    3. `@Body`
    4. Status codes
        1. defaults
        2. `@HttpCode(HttpStatus.<code>)`
    5. Accessing underline library
        1. `@Res()`
    6. injecting
        1. private readonly
    7. Error handling
        1. `new HttpExeption()`
        2. Helper classes eg: `new NotFoundException`
        3. Exception layer[^4]
3. Providers[^5]
4. Service
    1. `@Injectable()`
5. DTOs
    1. marking as readonly
    2. `extends ParticalType(<type>)`
    3. Validation Pipe
        1. whitelist: true
        2. forbidNonWhitelisted[^6]
        3. transform[^7]
        4. transformOptions
            1. enableImplicitConversion
    4. Nest validation
        1. class-validator
            1. `@IsString()`
                1. `{each: true}`
        2. class-transformer
            1. `@Type(()=> Number)`
6. Pipes
    1. types of pipes
7. Class validators
    1. pipes vs class validators
8. Accessing code expires req
9. Strategy
10. Guards
    1. global
    2. local

### TypeORM NestJS

1. configuration
    1. autoLoadEntites
    2. synchronize
        1. enable in dev, disable in prod
2. Entitles
    1. forRoot
    2. forFeatures
    3. `@Entity()`
        1. `@PrimaryGeneratedColumn`
        2. `@Column`
            1. nullable
        3. `@JoinTable()`
        4. `@ManyToMany(()=> <Relation>, (relation)=> relation.field)`
    4. Repository
        1. `@InjectRepository(<name>)`
3. TypeORM
    1. create
    2. save
    3. preload
    4. remove
4. Transactions
    1.

[^1]: Node.js makes not assumptions and includes nothing my default. Developer are in charge of setting up everything they want, this applies to everything from setting up routing, API calls, setting up web sockets and even code organization, file structure etc… NestJS let's you focus on the application problem at hand instead of the tiny implementation details
[^2]: For not creating test files
[^3]: Stimulate a command
[^4]: When throwing random error. NestJS automatically throes internal servererrorr
[^5]: Inject dependencies
[^6]: If set to true, if a field that is not on the DTO is passed it will throw an error
[^7]: If set to true, the body will be an instance of DTO class, and type casing as well
