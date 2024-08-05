# React

### Set up

1. `npx create-react-app \<appName \>`
1. components
    1. default is App
1. rafce, tsrafce
1. calling function on button click
    1. without parameter
    1. with parameter
1. Fragments
1. Children Prop

### Theory

1. What is React
2. DOM
    1. DOM vs Virtual DOM
    2. Reconciliation
        1. working
    3. Diffing Algorithm
    4. React Fibre
        1. incremental rendering
    5. Shadow DOM
3. Dynamic rendering
4. props vs state
5. Server Side vs Client Side Rendering in React
6. Synthetic Events
    1. Event Pooling
7. Life Cycle
8. View Oriented
9. Memoization
10. Pure functions and components
11. Strict Mode
12. SPAs vs MPAs
13. CSR vs SSR
14. Static vs Dynamic rendering
    1. ISR, SPA
15. Components
    1. A React render tree
        1. top-level components
        2. leaf components
    2. Props
        1. immutable
    3. Forwarding props
    4. children
    5. Importance of making them pure
    6. local mutation
16. JSX
    1. Rules of JSX
    2. Fragment
    3. JavaScript in JSX
    4. HTML VS JSX
17. Conditional rendering
18. Key
19. UI as a tree
    1. Render trees
    2. Module Dependency Tree
    3. Bundler
        1. eg: Webpack
        2. Compiling
        3. Loader
        4. Code splitting
20. Rendering steps
    1. Triggering
    2. Rendering
    3. Committing
21. Rerendering
22. Batching updates
23. State
    1. Behaviour
    2. Queueing updates
    3. Updater function
    4. Updating object
    5. local var vs state var
    6. local mutation
    7. Lifting state
    8. Reducer
24. Declarative vs Imperative UI
25. Event handlers
    1. `onClick`, `onSubmit` etc…
    2. Stopping propagation
    3. Preventing default
26. Lifecycle Methods
    1. What is Mounting, Unmounting
    2. Phases
        1. Mounting phase
            1. constructor
            2. render
            3. getDerivedStateFromProps
            4. componentDidMount
        2. Updating phase
            1. shouldComponentUpdate
            2. componentWillUpdate
            3. componentDidUpdate
                1. getSnapshotBeforeUpdate
        3. Unmounting phase
            1. componentWillUnmount
        4. Error Handling
            1. getDerivedStateFromError
            2. componentDidCatch
27. Hooks
    1. useState
        1. changeValue
        2. changeValueWithFunction
    2. useRef
        1. html
        2. useState vs useRef
        3. forwardRef
        4. useImperativeHandle
        5. flushSync
    3. useEffect
        1. dependency
        2. return in useEffect
        3. useLayoutEffect
    4. useMemo
        1. sample
        2. recache
        3. pros and cons
        4. referential equality
    5. useHistory
        1. push
        2. pop
        3. replace
        4. Redirect
    6. useNavigate
        1. navigate()
            1. route
            2. \-1, 1
    7. useCallback
        1. sample
        2. useMemo vs useCallback
        3. uses
    8. useContext
        1. sample
    9. useReducer
    10. Create custom hooks
        1. useDebugValue
    11. useTransition
    12. useDeferredValue
    13. useId
        1. sample
    14. useImperativeHandle
28. Props
    1. default prop
    2. PropDrilling
    3. Children
29. Components
    1. Creating Components
    2. Controlled vs Uncontrolled Components
        1. Inputs
    3. Higher order components
    4. Pure components
30. React Router

    1. install
    2. Hooks
        1. useHistory
        2. useNavigate
    3. use
    4. Link
        1. replace
        2. reloadDocument
        3. `state={}`
        4. useLocation()
        5. NavLink
            1. isActive
            2. end
        6. Navigate
            1. useNavigate
            2. navigate(-1)
    5. Types of Router
        1. BrowserRouter
        2. HashRouter
        3. HistoryRouter
        4. MemoryRouter
        5. StaticRouter
        6. NativeRouter
    6. params (:id)
    7. const {\<name\>} \= useParams()
    8. useSearchParams
    9. Nesting Routes
        1. index
        2. location
        3. shared element with children
        4. outlet
            1. useOutletContext()
        5. Nesting in separate file
        6. useRoute

### Good to Know

32. Immer
33. Object.entries(e)
34. Icons
35. Experimental Hooks
    1. useEffectEvent
    2. use
    3. useFormStatus
36. useOptimistic

### Week 2

38. Render props
39. Higher order components
40. Custom hooks
41. Code splitting
    1. Route based
    2. Component based
    3. React.lazy
42. Higher order comps
43. Lazy Loading
    1. fallback ui
        1. suspense
        2. Error boundaries
        3. componentDidCatch
        4. Fallback UI
        5. Nested & Propagation
44. useReducer
    1. Dispatch
    2. useReducer vs useState
    3. useReducer vs redux
    4. payload
45. PropTypes
    1. types \=\> name, string, any
    2. required, optional,
    3. node, element type
    4. oneof, shape
    5. PropTypes vs Typescript
46. useMemo vs useCallback
    1. React.Memo vs useMemo
    2. Object reference
    3. Pros and cons of memoization
47. Context API
    1. Provider
    2. Consumer
    3. useContext
    4. useReducer
48. Webpack
    1. Module Bundler
    2. Code Splitting
    3. Webpack Dev Server
    4. Hot Module Replacement (HMR)
    5. Tree Shaking
49. Babel
    1. Transpilation
    2. Plugins
    3. Runtime Polyfills
    4. Dynamic Import
50. useDeferedValue
51. dead code elimination
52. useTransition

### Others

1. forward ref
2. useDebugValue
3. useImperativeHandle
4. Axios interceptor
5. Concurrent Requests
    1. axios.all(), axios.spread()
    2. cancel Token
