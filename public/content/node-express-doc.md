# Node.js, Express

## Node

### Theory

1. What is Node.js
1. why v8 Engine
1. Advantages & Disadvantages of Node.js
1. How node works
1. libuv
1. Node Module System
1. Concurrency vs parallelism
1. REPL , Cli
1. NPX

### Architecture

1. I/O Polling
2. epoll
3. kquee
4. Thread pool
5. Event queue
6. Event loop
    1. phases
7. External Resources
8. Globals
    1. `__dirname`
    2. `__filename`
    3. Module
    4. Process
9. Modules
    1. Core Modules.
    2. local Modules.
    3. Third-party Modules.
    4. `module.exports:{}`
    5. require
    6. ESM
        1. import and export
10. NPM
    1. local and global
    2. npm init
11. `npm install` or `npm i`
12. nodemon
    1. scripts
        1. start
        2. dev
    2. npm run dev
13. package.json
14. package-lock.json
15. Event loop
16. Event Queue
17. Events
    1. Events emitter
        1. on, emit
    2. Http module
18. Streams
    1. type of streams
        1. writable, readable, duplex, transform
    2. `createReadStream()`
    3. `readFile` vs `readFileSync`
    4. `pipe()`
    5. Buffers
    6. Transfer-Encoding: chunked
19. Cron-job
    1. \* \* \* \* \*
    2. 1st\* \= second
    3. 2nd\* \= minute
    4. 3rd\* \= hour
    5. 4th\* \= day of month
    6. 5th\* \= month
    7. 6th\* \= day of week
    8. or, range selector
    9. time zone
    10. validation
20. CORS
    1. preflight request
        1. header
        2. `accept-control-allow-origin: *`
        3. `accept-control-allow-methods: *`
21. Cluster
22. Multithreading in node.js
    1. `require(‘worker_theads’)`
    2. new Worker
23. thread pool
24. worker thread
    1. creating worker
    2. parent port
25. cluster vs workerthread
26. child process
    1. methods
        1. fork
        2. exec
        3. execFile
        4. spawn
    2. spawn vs fork
    3. `child_procees.fork()` vs `cluster.fork()`

### HTTP

1. https
2. How does it work?
3. SSL certificate working
4. default port
5. request response cycle
6. Stateless protocol
    1. Local storage, Sessions and Cookies
7. Request
    1. General (start line)
        1. method/target/version
    2. header
    3. body
8. Response
    1. General (start line)
        1. version/statuscode/statustext
    2. header
        1. content type
    3. body
        1. requested resource
9. HTTP Methods
    1. GET
    2. POST
    3. PUT
    4. PATCH
    5. DELETE
    6. HEAD
    7. CONNECT
    8. OPTIONS
    9. TRACE
10. Idempotent
11. Safe Methods
12. User-Agent
13. Headers
14. writeHead vs setHead
15. Status code
    1. 1xx: Informational
    2. 2xx: Success
        1. 200 \- Success
        2. 201 \- Success and created
    3. 3xx: Redirect
        1. 301: moved to new URL
        2. 304: not changed
    4. 4xx: Client Error
        1. 401: Unauthorised
        2. 402: Payment Required
        3. 403: Forbidden
        4. 404: Page not found
    5. 5xx: Server Error
16. MIME type
17. HTTP v2
18. TCP and IP
19. XSS
20. CSRF
21. MMA
22. referral header
23. SQL injection
24. prepared statements

## Express

26. npm install express –save
27. `app \= express()`
    1. `get()`
        1. `status()`
        2. `send()`
        3. `sendFile()`
    2. `post()`
        1. `express.urlencode()`
        2. Form vs JS
    3. `put()`
    4. `patch()`
    5. `delete()`
    6. `all()`
    7. `use()`
    8. `listen()`
28. Static files
    1. public
    2. express.static()
29. API
    1. `json()`
30. Params vs Query String
31. Route Parameter
32. Query string/url Parameter
33. Path params
34. MIddleware
    1. what is middleware
    2. used for what?
    3. req, res, next
    4. `next()`
    5. `app.use` in middleware
    6. passing two middleware
    7. Types of Middleware
        1. Application-level middleware
        2. Third party middleware
            1. morgan
            2. multer
        3. Router-level middleware
        4. Built-in middleware
        5. Error-handling middleware
            1. err.statusCode
            2. err.message
35. Routing
    1. router
    2. express.Router()

### Core Express

1. Session
    1. `i express-session`
    2. secret
    3. resave
    4. saveUninitialized
    5. destroy()
2. Cookies
    1. i cookie-parser
3. Core middleware
4. Core routing
5. Build own API
6. Core views
7. database integration

### Questions

1. How to send find as response
1. Transaction in node.js

### EJS

1. i ejs
2. server side rendering
3. view engine
4. render()
5. `<% %>`, `<%- %>`, `<%= %>`
6. partials
7. Rest API
    1. RESTful
8. fragment identifier

### VS

10. API vs HTTP
11. API vs SSR
12. HTTP vs HTTPS
13. URIs vs URLs vs URNs
14. Session vs Cookies
15. GET vs POST
16. PUT vs PATCH
17. SSL vs TLS
18. Build-in Modules (only imp)
    1. os
    2. path
        1. `join()`
        2. `basename()`
        3. `resolve()`
    3. fs
        1. fs sync 2. readFileSync() 3. writeFileSync() 4. appendFileSync() 5. unlinkFileSync() 6. statusSync() 7. mkdirSync()
            1. recursive: true
        2. fs async 9. readFile( ) 10. writeFile()
    4. http
        1. `createServer()`
