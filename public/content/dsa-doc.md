# DSA

### Algorithms

1. Search
2. Binary Search(recursive also)
3. Linear Search
4. Recursion
5. Iterative & recursive
6. Virtual memory
7. Amortised resizing
8. Dynamic programing
    1. Memoize approach
    2. Bottom up approach

### Problems

1. Factorial
2. fibonacci
3. prime number (with and without recursion)

### Complexity Analysis

1. Time complexity
2. Space complexity

### Asymptotic Notations

1. Ranking
2. Big O notation
3. Omega Notation
4. Theta Notation

### Memory

1. Memory Allocation
2. Bit vs byte
3. Memory address
4. Contiguous memory allocation
5. Non-contiguous memory allocation
6. Stack
    1. Primitive types are stored in stack
7. Heap
    1. Reference type are stored in heap
    2. Eg: Arr, fun, obj
8. Memory Leak
    1. Symptoms
    2. Garbage Collections
        1. Process
    3. Reasons for memory leak
    4. How to debug
9. Big O Notation
    1. Linear time complexity
    2. Constant time complexity
    3. Quadratic time complexity
    4. Qubic
    5. Logarithmic complexity
    6. Exponential complexity
10. Operations in normal array
    1. Init
    1. Set
    1. Get
    1. Traverse
    1. Insert
    1. Delete

### Data Structures

1. What is DS?
2. Advantages and Disadvantages
3. Examples
    1. DOM
    2. Undu & Redo
    3. Os job scheduling
4. Dynamic Array
    1. It’s working and memory allocation?
    2. Set
5. Linked List
    1. Advantages and disadvantages
    2. Applications
    3. Creating a linked list
    4. Operation
        1. Init
        2. Set
        3. Get
        4. Traverse
        5. Insert
        6. Delete
    5. Singly Linked List
    6. Double linked list
    7. Circular linked list
    8. Array vs linked list

### Others

1. Build in DS in JS
    1. Array
        1. Push, pop, shift, unshift, forEach, map, filter, reduce, concat, slice, splice ,sort()
        2. some(), every(), find(), findIndex(), fill(), flat(), reverse(), sort()
    2. Objects
        1. Insert, Remove, Access, Search,
        2. Object.keys(), Object.values(), Object.entries()
    3. Sets
        1. add, has, delete, size, clear
    4. Maps
        1. set, get , has, delete, size, clear
    5. Array vs Set
    6. Object vs Map
    7. Strings
        1. Primitive and object string
        2. Escape char
        3. ASCII
            1. 32 \- Space
            2. 48-57 \== (0-9)
            3. 65-90 \== (A-Z)
            4. 97-122 \== (a-z)
        4. Unicode
        5. UTF-8
2. Custom DS
    1. Stacks
    2. Queue
    3. Circular queues
    4. Linked lists
    5. Hash tables
    6. Trees
    7. Graphs

## Intermediate

### Algorithms

1. Sorting
    1. Bubble sort
    2. Insertion sort
    3. Quick sort
        1. Divide and conquer
        2. Partition method
        3. Pivot selection
        4. Last, first
        5. average/median
    4. Heap sort
    5. Merge sort
        1. Divide and conquer
    6. Merge vs Quick sort
    7.

### Data Structures

1. Stacks
    1. LIFO
    2. Push, pop
    3. Stack underflow
    4. Stack overflow
    5. Use cases
    6. Types of Stack
    7. Linear Stack
    8. Dynamic Stack
    9. Array-based
    10. Linked list based
    11. Monotonic stack
2. Queue
    1. FIFO
    2. Enqueue
    3. Dequeue
    4. Peek
    5. Priority queue
    6. Circular queue
    7. Uses
    8. Types of Queue
        1. Linear Queue
        2. Circular Queue
        3. Priority Queue
        4. DEqueue (Double ended queue)
            1. Input restricted
            2. Output restricted
        5. Blocking Queue
        6. Concurrent Queue
        7. Delay Queue
3. Hash Table
    1. Searching O(1)
    2. Hash function
    3. Collision
    4. Dynamic restructuring
    5. Uses
    6. Load factor
    7. Operations
        1. Init
        2. Insert
        3. Search
        4. Delete
        5. Traverser
    8. Please Note
        1. Week set, week map
    9. Collisions Handling
        1. Separate Chaining
        2. Open Addressing
            1. Linear Probing
            2. Quadratic Probing
            3. Double Hashing
            4. Clustering
        3. Cuckoo hashing
        4. Robin Hood hashing
4. SHA: Secure Hashing Algorithm

## Advanced

1. Linear, non-linear, hierarchical

### Data Structures

1. Tree
    1. Features
    2. Uses
    3. parent, child, root, leaf, sibling, ancestor, descendent, path, distance, degree, dept, height,edge,subtree
    4. Types of trees on nodes
    5. Binary tree
    6. Ternary tree
    7. K-array tree
    8. Threaded binary tree
    9. Types of trees on structure
        1. Complete tree
        2. Full tree
        3. Perfect tree
        4. Degrenarted
            1. Left-skew
            2. Right-skew
2. Binary Search Tree (BST)
    1. BST vs BT
    2. Uses
    3. Balanced vs unbalanced tree
    4. Properties of BST
    5. Operations
        1. Inserting
        2. Deletion
    6. Traversal
        1. DFS
            1. InOrder
            2. PreOrder
            3. PostOrder
        2. BFS
3. Balanced Search Tree
    1. AVL tree
    2. Red-black tree
    3. Prefix tree
    4. M-way search tree
    5. B Tree
    6. B+ Tree
    7. Merkle Tree
    8. Red-black tree vs AVL
4. Heap
    - Min Heap
        1. To get value of
            1. Left child
            2. Right child
            3. Parent
        2. Operations
            1. Init/ Heapify
            2. Insert
            3. Delete
    - Max Heap
    - Heapfity
        1. Bottom-up
        2. Top-down
    - DEPQ
5. Trie
    1. String vs Trie
    2. Operations
        1. Init
        2. Insertion
        3. Delete
        4. Search
        5. Prefix and Suffix tree
        6. terminator char
    3. Compressed Trie
    4. Radix Tree (Patricia Trie)
6. Graph
    1. Vertex
    2. Edge
    3. Can be stored as
        1. Adjacency list
            1. as linked list
            2. time O(V)
            3. space O(V+E)
        2. Adjacency matrix
            1. As array
            2. time O(1)
            3. space O(v^2)
        3. Spanning tree
        4. Min spanning tree
    4. Graph indexing
        1. Vertex-centric indexes
        2. Edge-centric indexes
    5. Types
        1. Unidirectional (Direct graph)
        2. Bidirectional (Un DIrected graph)
        3. Cyclic
        4. Disconnected
        5. Weighted Graph
        6. Unweighted Graph
        7. Bipartite Graph
    6. Traversal
        1. BFS
        2. DFS
    7. River size problem

### Algorithms

1. Greedy method
1. Kruskal's Algorithm
1. Prim's Algorithm
1. Dijkstra's Algorithm
1. Bellman-Ford Algorithm
1. Topological Sorting
1. Floyd-Warshall Algorithm
1. Bipartite Graph Checking
1. Max Flow (Ford-Fulkerson Algorithm)

### Low level

1. bit, byte
    1. nibble
2. word
    1. dword
    2. qword
3. byte order
    1. endianness
4. registers
5. cache line
6. memoery
    1. heap (in memory)
    2. stack (in memory
    3. virtual memory
    4. orphaned meoery/memory leak
7. pagings
8. sements
9. gramentaions
10. page tables
11. mmapping
12. MMU (PTE, PTBR, TLB)
13. DMA
14. ASLR
15. KASLR (xnu)
16. KPTI
17. PAC (arm64e)

### Question

1. Graph vs Tree
2. Forest (in Tree)
3. Forest > Graph > Tree > Linked list
4. Operators
    1. Binary operators
    2. Priority
    3. Infix
    4. Prefix (Polish notation)
    5. Postfix (Reverse Polish notation)

### General

1. How does Logarithms work
1. File structure vs Data Structure
1. Where is the DS used?
1. Void vs null
1. Dynamic data structure
    1. Uses
    1. Example
1. Dynamic memory management/ allocations
1. Heap be used over a stack
1. Data abstraction
1. Post fix expression
1. Signed number
1. Pointers in DS
    1. Uses
1. Huffman’s algorithm working
1. What is recursive algorithm
    1. Divide and conquer on recursion
1. Which is the fastest sorting algorithm available?
1. Multi linked
1. Sparse matrices
1. Disadvantages of implementing queues using arrays
1. Void pointer
1. Lexical analysis
    1. Lexeme
    1. Pattern
