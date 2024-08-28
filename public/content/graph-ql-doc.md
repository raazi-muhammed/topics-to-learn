# Graph QL

### High level

1. When to use
    1. there is a lot of api request going on
    2. huge amount of traffit
2. Cons
    1. configuration need
    2. hard to debug
3. GraphQL Tools
4. REST vs GraphQL
    1. GraphQl has only endpoint, then response is based on query
    2. overfeching
    3. underfeching

### Concept

1. Fields
    1. Meta fields
        1. \_\_typename
2. Arguments
3. Aliases
4. Fragments[^1]
    1. var inside fragments
    2. [inline fragments](https://graphql.org/learn/queries/#inline-fragments)
        1. interfaces
        2. union
5. Operation name
    1. keyword - query, mutation, subscription
    2. query name
6. variables[^2]
    1. definitions
        1. options `!`
    2. default value
7. [directives](https://graphql.org/learn/queries/#directives)
    1. `@inlcude(if: Boolean)`
    2. `@skip(if: Boolean)`
8. query
9. mutation
    1. inputObject
10. query vs mutation[^3]
11. Schemas
    1. type system
    2. type language
    3. objec types and fileds
    4. nullable
        1. `Episode!`
        2. `[Episode!]!`
    5. Arguments
12. Types
    1. [Query and muatatoin types](https://graphql.org/learn/schema/#the-query-and-mutation-types)
    2. Scalar types
        1. Int
        2. Float
        3. String
        4. Boolean
        5. ID
    3. Custom type
    4. Enum type
    5. Lists
    6. Non-Null
13. Interfaces
14. Union
15. [Validation](https://graphql.org/learn/validation/)
16. Execution

    1. Root fields
    2. resolvers
        1. obj
        2. args
        3. context
        4. info
    3. async resolvers
    4. trivial resolvers
    5. list resolveres
    6. scalar coercion

17. Schema
    1. type
        1. ID
        2. String
        3. [String]
    2. constans
        1. ! - compelsory
    3. enum
    4. input
    5. **Query**
        1. ResolveFeild
        2. nullable
    6. **Mutation**
        1. Args
        2. InputType
18. [^4]Resolves
19. Arguments
20. Apollo
21. **NestJS**
    1. schema first approch
    2. code first approch
    3. Resolve field

### Links

[GraphQL in NestJS](https://youtu.be/CSfZmyzQAG8?si=n3LZjcM5xbmYpKXg)

[^1]: That’s why GraphQL includes reusable units called *fragments*. Fragments let you construct sets of fields, and then include them in queries where you need to
[^2]: GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called *variables*.
[^3]: **While query fields are executed in parallel, mutation fields run in series, one after the other.**
