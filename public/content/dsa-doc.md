# DSA

1. ### **Algorithms**

    - **Search**
    - Binary Search(recursive also)
    - Linear Search

1. Recursion
1. Iterative & recursive
1. Virtual memory
1. Amortised resizing
1. Dynamic programing

    - Memoize approach
    - Bottom up approach

1. ### **Problems**

    - Factorial, fibonacci, prime number (with and without recursion)

1. ### **Complexity Analysis**

    - Time complexity
    - Space complexity

1. ### **Asymptotic Notations**

    - Ranking
    - Big O notation
    - Omega Notation
    - Theta Notation

1. ### **Memory**

1. **Memory Allocation**
    - Bit vs byte
    - Memory address
    - Contiguous memory allocation
    - Non-contiguous memory allocation
    - **Stack**
        1. Primitive types are stored in stack
    - **Heap**
        1. Reference type are stored in heap
        1. Eg: Arr, fun, obj
1. **Memory Leak**
    - Symptoms
    - **Garbage Collections**
        1. Process
    - Reasons for memory leak
    - How to debug
1. **Big O Notation**
    - Linear time complexity
    - Constant time complexity
    - Quadratic time complexity
    - Qubic
    - Logarithmic complexity
    - Exponential complexity
1. **Operations in normal array**

    - Init
    - Set
    - Get
    - Traverse
    - Insert
    - Delete

1. ### **Data Structures**

1. What is DS?
1. Advantages and Disadvantages
1. Examples
    - DOM
    - Undu & Redo
    - Os job scheduling
1. **Dynamic Array**
    - It’s working and memory allocation?
    - Set
1. **Linked List**

    - Advantages and disadvantages
    - Applications
    - **Creating a linked list**
    - **Operation**
        1. Init
        1. Set
        1. Get
        1. Traverse
        1. Insert
        1. Delete
    - Singly Linked List
    - Double linked list
    - Circular linked list
    - Array vs linked list

1. ## **OTHERS**

1. **Build in DS in JS**
    - **Array**
        1. Push, pop, shift, unshift, forEach, map, filter, reduce, concat, slice, splice ,sort()
        1. some(), every(), find(), findIndex(), fill(), flat(), reverse(), sort()
    - **Objects**
        1. Insert, Remove, Access, Search,
        1. Object.keys(), Object.values(), Object.entries()
    - **Sets**
        1. add, has, delete, size, clear
    - **Maps**
        1. set, get , has, delete, size, clear
    - Array vs Set
    - Object vs Map
    - **Strings**
        1. Primitive and object string
        1. Escape char
        1. ASCII
            1. 32 \- Space
            1. 48-57 \== (0-9)
            1. 65-90 \== (A-Z)
            1. 97-122 \== (a-z)
        1. Unicode
        1. UTF-8
1. **Custom DS**
    - Stacks
    - Queue
    - Circular queues
    - Linked lists
    - Hash tables
    - Trees
    - Graphs

##

## **Intermediate**

1. ### **Algorithms**

    - **Sorting**
    - Bubble sort
    - Insertion sort
    - Quick sort
        1. Divide and conquer
        1. Partition method
        1. **Pivot selection**
        1. Last, first
        1. average/median
    - Heap sort
    - Merge sort
        1. Divide and conquer
    - Merge vs Quick sort

1. ### **Data Structures**

1. **Stacks**
    - LIFO
    - Push, pop
    - Stack underflow
    - Stack overflow
    - Use cases
    - **Types of Stack**
    - Linear Stack
    - Dynamic Stack
    - Array-based
    - Linked list based
    - Monotonic stack
1. **Queue**
    - FIFO
    - Enqueue
    - Dequeue
    - Peek
    - Priority queue
    - Circular queue
    - Uses
    - **Types of Queue**
    - \- Linear Queue
    - \- Circular Queue
    - \- Priority Queue
    - \- DEqueue (Double ended queue)
        1. Input restricted
        1. Output restricted
    - \- Blocking Queue
    - \- Concurrent Queue
    - \- Delay Queue
1. **Hash Table**
    - Searching O(1)
    - Hash function
    - Collision
    - Dynamic restructuring
    - Uses
    - Load factor
    - **Operations**
    - Init
    - Insert
    - Search
    - Delete
    - Traverser
    - **Please Note**
    - Week set, week map
    - **Collisions Handling**
    - \- Separate Chaining
    - \- Open Addressing
        1. Linear Probing
        1. Quadratic Probing
        1. Double Hashing
        1. Clustering
    - \- Cuckoo hashing
    - \- Robin Hood hashing
1. **SHA: Secure Hashing Algorithm**

##

## **Advanced**

1. Linear, non-linear, hierarchical

1. ### **Data Structures**

1. **Tree**
    - Features
    - Uses
    - parent, child, root, leaf, sibling, ancestor, descendent, path, distance, degree, dept, height,edge,subtree
    - **Types of trees on nodes**
    - \- Binary tree
    - \- Ternary tree
    - \- K-array tree
    - \- Threaded binary tree
    - **Types of trees on structure**
    - \- Complete tree
    - \- Full tree
    - \- Perfect tree
    - **\- Degrenarted**
        1. Left-skew
        1. Right-skew
1. **Binary Search Tree (BST)**
    - BST vs BT
    - Uses
    - Balanced vs unbalanced tree
    - Properties of BST
    - **Operations**
    - \- Inserting
    - \- Deletion
    - **\- Traversal**
        1. **DFS**
        1. \- InOrder
        1. \- PreOrder
        1. \- PostOrder
        1. **BFS**
1. **Balanced Search Tree**
    - AVL tree
    - Red-black tree
    - Prefix tree
    - M-way search tree
    - \- B Tree
    - \- B+ Tree
    - Merkle Tree
    - Red-black tree vs AVL
1. **Heap**
    - Min Heap
        1. **To get value of**
        1. \- Left child
        1. \- Right child
        1. \- Parent
        1. **Operations**
        1. \- Init/ Heapify
        1. \- Insert
        1. \- Delete
    - Max Heap
    - Heapfity
        1. Bottom-up
        1. Top-down
    - DEPQ
1. **Trie**
    - String vs Trie
    - **Operations**
    - \- Init
    - \- Insertion
    - \- Delete
    - \- Search
    - Prefix and Suffix tree
    - \- terminator char
    - **Compressed Trie**
    - \- Radix Tree (Patricia Trie)
1. **Graph**

    - Vertex, Edge
    - Can be stored as
    - \- Adjacency list
        1. as linked list
        1. time O(V)
        1. space O(V+E)
    - \- Adjacency matrix
        1. As array
        1. time O(1)
        1. space O(v^2)
    - Spanning tree
        1. min spanning tree
    - Graph indexing
        1. Vertex-centric indexes
        1. Edge-centric indexes
    - **Types**
    - \- Unidirectional (Direct graph)
    - \- Bidirectional (Un DIrected graph)
    - \- Cyclic
    - \- Disconnected
    - \- Weighted Graph
    - \- Unweighted Graph
    - \- Bipartite Graph
    - **Traversal**
        1. BFS
        1. DFS
    - River size problem

1. ### **Algorithms**

1. Greedy method
1. Kruskal's Algorithm
1. Prim's Algorithm
1. Dijkstra's Algorithm
1. Bellman-Ford Algorithm
1. Topological Sorting
1. Floyd-Warshall Algorithm
1. Bipartite Graph Checking
1. Max Flow (Ford-Fulkerson Algorithm)

1. ### **Question**

1. Graph vs Tree
1. Forest (in Tree)
1. Forest \> Graph \> Tree \> Linked list
1. Operators
    - Binary operators
    - Priority
    - Infix
    - Prefix (Polish notation)
    - Postfix (Reverse Polish notation)

### **General**

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
