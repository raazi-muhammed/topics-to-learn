# Node.js, Express

## **Theory**

1. What is Node.js
1. why v8 Engine
1. Advantages & Disadvantages of Node.js
1. How node works
1. libuv
1. Node Module System
1. Concurrency vs parallelism
1. REPL , Cli
    1. \_
1. NPX

### **Architecture**

![][image1]

1. I/O Polling
1. epoll
1. kquee
1. Thread pool
1. Event queue
1. Event loop
    1. phases
1. External Resources
1. Globals
    1. \_\_dirname
    1. \_\_filename
    1. **Module**
    1. Process
1. **Modules**
    1. **Core Modules.**
    1. local Modules.
    1. Third-party Modules.
    1. module.exports:{}
    1. require
    1. ESM
        1. import and export
1. **NPM**
    1. local and global
    1. npm init
1. npm install or i Nodemon
    1. scripts
        1. start
        1. dev
    1. npm run dev
1. package.json
1. package-lock.json
1. Event loop
1. Event Queue
1. Events
    1. **Events emitter**
        1. on, emit
    1. Http module
1. **Streams**
    1. type of streams
        1. writable, readable, duplex, transform
    1. createReadStream()
    1. readFile vs readFileSync
    1. pipe()
    1. Buffers
    1. Transfer-Encoding: chunked
1. **Cron-job**
    1. \* \* \* \* \*
    1. 1st\* \= second
    1. 2nd\* \= minute
    1. 3rd\* \= hour
    1. 4th\* \= day of month
    1. 5th\* \= month
    1. 6th\* \= day of week
    1. or, range selector
    1. time zone
    1. validation
1. **CORS**
    1. preflight request
        1. header
        1. accept-control-allow-origin: \*
        1. accept-control-allow-methods: \*
1. **Cluster**
1. Multithreading in node.js
    1. require(‘worker_theads’)
    1. new Worker
1. thread pool
1. worker thread
    1. creating worker,
    1. parent port
1. cluster vs workerthread
1. child process

    1. methods
    1. \- fork
    1. \- exec
    1. \- execFile
    1. \- spawn
    1. spawn vs fork
    1. child_procees.fork() vs cluster.fork()

1. ## **HTTP**

    1. https
    1. How does it work?
    1. SSL certificate working
    1. default port
    1. request response cycle
    1. Stateless protocol
        1. Local storage, Sessions and Cookies
    1. Request
        1. General (start line)
            1. method/target/version
        1. header
        1. body
    1. Response
        1. General (start line)
            1. version/statuscode/statustext
        1. header
            1. content type
        1. body
            1. requested resource
    1. **HTTP Methods**
        1. GET
        1. POST
        1. PUT
        1. PATCH
        1. DELETE
        1. HEAD
        1. CONNECT
        1. OPTIONS
        1. TRACE
    1. Idempotent
    1. Safe Methods
    1. User-Agent
    1. Headers
    1. writeHead vs setHead
    1. Status code
        1. 1xx: Informational
        1. 2xx: Success
            1. 200 \- Success
            1. 201 \- Success and created
        1. 3xx: Redirect
            1. 301: moved to new URL
            1. 304: not changed
        1. 4xx: Client Error
            1. 401: Unauthorised
            1. 402: Payment Required
            1. 403: Forbidden
            1. 404: Page not found
        1. 5xx: Server Error
    1. MIME type
    1. HTTP v2
    1. TCP and IP

1. XSS
1. CSRF
1. MMA
    1. referral header
1. SQL injection

    1. prepared statements

1. ## **Express**

1. npm install express –save
1. app \= express()
    1. get()
        1. status()
        1. send()
        1. sendFile()
    1. post()
        1. express.urlencode()
        1. Form vs JS
    1. put()
    1. patch()
    1. delete()
    1. all()
    1. use()
    1. listen()
1. Static files
    1. public
    1. express.static()
1. **API**
    1. json()
1. **Params, Query String**
1. Route Parameter
1. Query string/url Parameter
1. Path params
1. **MIddleware**
    1. what is middleware
    1. used for what?
    1. req, res, next
    1. next()
    1. app.use in middleware
    1. passing two middleware
    1. **Types of Middleware**
        1. Application-level middleware
        1. Third party middleware
            1. morgan
            1. multer
        1. Router-level middleware
        1. Built-in middleware
        1. Error-handling middleware
            1. err.statusCode
            1. err.message
1. **Routing**

    1. router
    1. express.Router()

1. ### **Core Express**

    1. **Session**
        1. i express-session
        1. secret
        1. resave
        1. saveUninitialized
        1. destroy()
    1. **Cookies**
        1. i cookie-parser
    1. Core middleware
    1. Core routing
    1. Build own API
    1. Core views
    1. database integration

### **Questions**

1. How to send find as response
1. Transaction in node.js

1. ### **EJS**

    1. i ejs
    1. server side rendering
    1. view engine
    1. render()
    1. \<% %\>, \<%- %\>, \<%= %\>
    1. partials

1. **Rest API**
    1. RESTful
1. fragment identifier

1. ### **VS**

1. API vs HTTP
1. API vs SSR
1. HTTP vs HTTPS
1. URIs vs URLs vs URNs
1. Session vs Cookies
1. GET vs POST
1. PUT vs PATCH
1. SSL vs TLS
1. **Build-in Modules (only imp)**
    1. os
    1. path
        1. join()
        1. basename()
        1. resolve()
    1. fs
        1. fs sync
        1. \- readFileSync()
        1. \- writeFileSync()
        1. \- appendFileSync()
        1. \- unlinkFileSync()
        1. \- statusSync()
        1. \- mkdirSync()
            1. recursive: true
        1. **fs async**
        1. \- readFile( )
        1. \- writeFile()
    1. http
        1. createServer()
