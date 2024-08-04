# JavaScript

1. ## **DOM**

    1. querySelector
    1. textContent
    1. addEventListener
    1. Order of Parsing

1. **event Propagation**
    1. event Bubbling
    1. event Capturing/ Trickling
    1. how to add both on program
1. event.stopPropagation();
1. inst

    1. e.target
        1. id
        1. tagName
        1. pros and cons

1. ## **Architecture**

    1. Execution context
        1. variable environment (memory)
        1. Thread of execution (code)
        1. \- global & local execution context
        1. \- phases
            1. Memory allocation
            1. Code execution
    1. Synchronous single threaded app
    1. Call stack
    1. Proxy
        1. Proxy traps
        1. Reflect
        1. proxy vs reflect
    1. **Event loop**
        1. Callback queue/ task queue
        1. Microtask queue
            1. mutation observer
        1. Starvation
        1. Memory Heap
    1. Just In Time Compilation
    1. Interpreter vs Compiler
    1. Abstract Syntax Tree
    1. Concurrency model

1. ## **Theory**

1. Data types
    1. wrapper objects
    1. 0 vs new Number(0)
    1. **Numbers**
        1. 1_000_000
        1. 1e9, 1e-6
        1. Hex, binary and octal numbers
        1. toString(base)
        1. Math.trunc
1. Operators
1. enum
    1. how to get enum in javascript
1. **Function**
    1. Function Statement
    1. Function Expression
    1. Function Declaration
    1. Anonymous function
    1. Named Function Expression
    1. Functional Programing
    1. **Higher order function**
    1. First class function
    1. **Decorator function**
        1. use
        1. \- count no of function call
        1. \- valid data of params
    1. **Pure function**
        1. pros and cons
        1. rules
        1. pure vs impure
    1. IIFE
        1. pros
1. Advantages and disadvantages of JS
1. **Set Map Flat**
    1. set
        1. add, delete, has, clear, kyes, values, entries
        1. \<setName\>.size
    1. map
        1. get, set, has, delete, clear, keys, values, entries, forEach
        1. iterating
    1. object vs map
    1. weekSet()
        1. features
    1. weekMap()
        1. features
        1. key is private
    1. Week set and map summary
    1. falt()
    1. flatMap()
    1. reduceRight()
    1. copyWithin()
1. **Operators**
    1. Nullish coalescing operator
    1. Optional chaining
    1. || vs ??
    1. Ternary operator
    1. Type Operators
    1. **Unary operators**
        1. delete
        1. typeof
        1. \!, \++, \-, \+
    1. **Bitwise Operators**
        1. bitwise OR
        1. bitwise AND
        1. uses
1. **Scope**
    1. Global scope
    1. Module scope
    1. Function scope
    1. Lexical scope
    1. Block scope
1. Shadowing & Illegal shadowing
1. **Prototype**
1. Types of error
    1. syntax, logic
1. **Closure**
    1. Disadvantage
    1. Uses
    1. lexical scope vs closure
    1. IIFE
1. **Garbage collection**
    1. How does it work?
    1. mark-and-sweep
    1. reachability
    1. **Optimizations**
        1. \- Generational
        1. collection
        1. \- Incremental collection
        1. \- Idle-time collection
1. **Hoisting**
    1. TDZ let, const vs var
    1. Function vs arrow function
1. **Call Apply Bind**
    1. function borrowing
    1. call vs apply vs bind
    1. polyfills
1. transpiler
    1. Babel.
    1. webpack
1. polyfills vs transpiler
1. This Keyword
1. **String Methods**
    1. Length, toUpperCase, LowerCase, Trim, Pad, charAt, Split, Concat, substring, indexOf, lastIndexOf, localeCompare
1. **Array Methods**
    1. Map, Filter, Reduce, Find, Sort, Foreach, Push, Pop, Shift, Unshift, Slice, Splice, concat, indexOf, lastIndexOf, forEach, split, join, reduceRight, iArray, fill, copy, flat
    1. spare array, jagged array, hols in array
    1. copy within
    1. typed arrays
1. **Object Methods**
    1. object constructor, literal
    1. deleting field
    1. Computed properties
    1. \_\_proto\_\_
    1. in
    1. Object.assign
    1. structuredClone
    1. \_.cloneDeep(obj)
    1. methods
    1. this keyword
    1. Symbol type
1. Symbol
    1. properties
    1. use
    1. ongo
    1. ​​global symbol registry
    1. for, keyFor, iterator, toPrimitive
1. **Loop**
    1. for
    1. do while vs while
    1. labelled statements
    1. \- break
    1. \- continue
    1. for…in
    1. for…of
1. **Callback**
    1. callback hell
    1. inversion of control
1. **Promises**
    1. Promise states
    1. Promise chaining
    1. Promise.all
    1. Promise.allSettled
    1. Promise.any
    1. Promise.race
    1. Promise.resolve
    1. Thenable
    1. Finally
    1. Catch
    1. immutable
    1. promisify
    1. pros and cons
1. **Async await**
    1. async always return a promise
    1. error handling in async await
1. **Debouncing & Throttling**
    1. both are used for optimising performance of a web app
    1. by limiting the rate of API calls
1. Spread and Rest Operator
1. DOM, BOM
1. Window Object
1. **ES6 and its features**
    1. Let, Var, Const
    1. Ternary operator
    1. Arrow function
    1. Template literals
    1. Default Parameters
    1. Classes
    1. Modules
    1. Iterators
    1. Object & Array Destructuring
1. **Primitive and non-primitive**
    1. Pass by value and pass by reference
1. Message queue
1. Life
1. Generator
1. **Prototype**
    1. Prototype chain
    1. Prototypal Inheritance
    1. uses?
    1. Circular reference
    1. Object.key
1. **Recursion**
    1. recursive call to function
    1. condition to exit
    1. pros and cons
    1. display the fibonacci sequence
    1. use
1. JavaScript is dynamically types
1. **Currying**
    1. function inside function
1. **Type Casting**
    1. Implicite (Coercion)
    1. Explicit (Conversion)
1. Microtask queue
1. **Shallow copy vs Deep copy**
    1. primitive vs structural
    1. how to make these copies
    1. pros and cons
    1. Mutable vs Immutable
    1. Object.freeze()
1. TCP/IP
1. DNS
1. **IIFE**
    1. pros and cons
1. **Composition vs Inheritance**
1. Function recursion
1. \[Symbol.iterator\]
1. Truthy and falsy value
1. Strict mode in JS
1. this substitution

1. ## **VS**

    1. label vs func
    1. \== and \===
    1. Let, const, var
    1. Synchronous vs asynchronous
    1. While vs do while
    1. Foreach Vs Map
    1. Parameters, Arguments
    1. for in, for of
    1. Undefined, Null
    1. Keywords & Identifiers
    1. Type casting vs Type coercion
    1. textContent vs innerText
    1. identifiers vs variables
    1. defer vs async

1. ## **Good to Know**

1. interpreted and compiled doe
1. Server-side vs client-side code
1. with in js
