# JavaScript

## DOM

1. querySelector
2. textContent
3. addEventListener
4. Order of Parsing
5. event Propagation
    1. event Bubbling
    2. event Capturing/ Trickling
    3. how to add both on program
6. `event.stopPropagation();`
7. inst
8. `e.target`
    1. id
    2. tagName
    3. pros and cons
    4.

### Architecture

1. Execution context
    1. variable environment (memory)
    2. Thread of execution (code)
        1. global & local execution context
        2. phases
            1. Memory allocation
            2. Code execution
2. Synchronous single threaded app
3. Call stack
4. Proxy
    1. Proxy traps
    2. Reflect
    3. proxy vs reflect
5. Event loop
    1. Callback queue/ task queue
    2. Microtask queue
        1. mutation observer
        2. Starvation
        3. Memory Heap
    3. Just In Time Compilation
    4. Interpreter vs Compiler
    5. Abstract Syntax Tree
    6. Concurrency model

### Theory

1. Data types
    1. wrapper objects
    2. 0 vs new `Number(0)`
    3. Numbers
        1. 1_000_000
        2. 1e9, 1e-6
        3. Hex, binary and octal numbers
        4. `toString(base)`
        5. `Math.trunc()`
2. Operators
3. Enum
    1. how to get enum in javascript
4. Function
    1. Function Statement
    2. Function Expression
    3. Function Declaration
    4. Anonymous function
    5. Named Function Expression
    6. Functional Programing
    7. Higher order function
    8. First class function
    9. Decorator function
        1. use
            1. count no of function call
            2. valid data of params
    10. Pure function
        1. pros and cons
        2. rules
        3. pure vs impure
    11. IIFE
        1. pros
        2. cons
5. Advantages and disadvantages of JS
6. Set Map Flat
    1. set
        1. add, delete, has, clear, kyes, values, entries
        2. `<setName>.size`
    2. map
        1. get, set, has, delete, clear, keys, values, entries, forEach
        2. iterating
    3. object vs map
    4. WeekSet
        1. features
    5. WeekMap
        1. features
        2. key is private
    6. Week set and map summary
    7. falt()
    8. flatMap()
    9. reduceRight()
    10. copyWithin()
7. Operators
    1. Nullish coalescing operator
    2. Optional chaining
    3. `||` vs `??`
    4. Ternary operator
    5. Type Operators
    6. Unary operators
        1. delete
        2. typeof
        3. \!, \++, \-, \+
    7. Bitwise Operators
        1. bitwise OR
        2. bitwise AND
        3. uses
8. Scope
    1. Global scope
    2. Module scope
    3. Function scope
    4. Lexical scope
    5. Block scope
9. Shadowing & Illegal shadowing
10. Prototype
11. Types of error
    1. syntax, logic
12. Closure
    1. Disadvantage
    2. Uses
    3. lexical scope vs closure
    4. IIFE
13. Garbage collection
    1. How does it work?
    2. mark-and-sweep
    3. reachability
    4. Optimizations
        1. Generational
        2. collection
            1. Incremental collection
            2. Idle-time collection
14. Hoisting
    1. TDZ `let`, `const` vs `var`
    2. Function vs arrow function
15. Call Apply Bind
    1. function borrowing
    2. call vs apply vs bind
    3. polyfills
16. transpiler
    1. Babel
    2. Webpack
17. Polyfills vs Transpiler
18. `this` keyword
19. String Methods
    1. Length, toUpperCase, LowerCase, Trim, Pad, charAt, Split, Concat, substring, indexOf, lastIndexOf, localeCompare
20. Array Methods
    1. Map, Filter, Reduce, Find, Sort, Foreach, Push, Pop, Shift, Unshift, Slice, Splice, concat, indexOf, lastIndexOf, forEach, split, join, reduceRight, iArray, fill, copy, flat
    2. spare array, jagged array, hols in array
    3. copy within
    4. typed arrays
21. Object Methods
    1. object constructor, literal
    2. deleting field
    3. Computed properties
    4. `__proto__`
    5. in
    6. `Object.assign`
    7. structuredClone
    8. `\_.cloneDeep(obj)`
    9. methods
    10. `this` keyword
    11. Symbol type
22. Symbol
    1. properties
    2. use
    3. ongo
    4. ​​global symbol registry
    5. for, keyFor, iterator, toPrimitive
23. Loop
    1. for
    2. do while vs while
    3. labelled statements
        1. break
        2. continue
    4. for…in
    5. for…of
24. Callback
    1. callback hell
    2. inversion of control
25. Promises
    1. Promise states
    2. Promise chaining
    3. Promise.all
    4. Promise.allSettled
    5. Promise.any
    6. Promise.race
    7. Promise.resolve
    8. Thenable
    9. Finally
    10. Catch
    11. immutable
    12. promisify
    13. pros and cons
26. Async await
    1. async always return a promise
    2. error handling in async await
27. Debouncing & Throttling
    1. both are used for optimising performance of a web app
    2. by limiting the rate of API calls
28. Spread and Rest Operator
29. DOM, BOM
30. Window Object
31. ES6 and its features
    1. Let, Var, Const
    2. Ternary operator
    3. Arrow function
    4. Template literals
    5. Default Parameters
    6. Classes
    7. Modules
    8. Iterators
    9. Object & Array Destructuring
32. Primitive and non-primitive
    1. Pass by value and pass by reference
33. Message queue
34. Life
35. Generator
36. Prototype
    1. Prototype chain
    2. Prototypal Inheritance
    3. uses?
    4. Circular reference
    5. Object.key
37. Recursion
    1. recursive call to function
    2. condition to exit
    3. pros and cons
    4. display the fibonacci sequence
    5. use
38. JavaScript is dynamically types
39. Currying
    1. function inside function
40. Type Casting
    1. Implicite (Coercion)
    2. Explicit (Conversion)
41. Microtask queue
42. Shallow copy vs Deep copy
    1. primitive vs structural
    2. how to make these copies
    3. pros and cons
    4. Mutable vs Immutable
    5. `Object.freeze()`
    6. `strucutredClone()`
43. TCP/IP
44. DNS
45. IIFE
    1. pros and cons
46. Composition vs Inheritance
47. Function recursion
48. `\[Symbol.iterator\]`
49. Truthy and falsy value
50. Strict mode in JS
51. this substitution

### VS

1. label vs func
2. `==` and `===`
3. Let, const, var
4. Synchronous vs asynchronous
5. While vs do while
6. Foreach Vs Map
7. Parameters, Arguments
8. for in, for of
9. Undefined, Null
10. Keywords & Identifiers
11. Type casting vs Type coercion
12. textContent vs innerText
13. identifiers vs variables
14. defer vs async

### Good to Know

16. interpreted and compiled doe
17. Server-side vs client-side code
18. with in js
