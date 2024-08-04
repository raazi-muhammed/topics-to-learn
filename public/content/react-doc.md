# React Guide

### Components

1. Default is App
2. `rafce`, `tsrafce`
3. Calling function on button click
    1. Without parameter
    2. With parameter
4. Fragments
5. Children Prop

### Theory

1. What is React
2. DOM
    1. DOM vs Virtual DOM
    1. Reconciliation
        1. Working
        1. Diffing Algorithm
        1. React Fibre
            1. Incremental rendering
    1. Shadow DOM
    1. Dynamic rendering
3. Props vs State
4. Server Side vs Client Side Rendering in React
5. Synthetic Events
    1. Event Pooling
6. Life Cycle
    1. View Oriented
7. Memoization
8. Pure functions and components
9. Strict Mode
10. SPAs vs MPAs
11. CSR vs SSR
12. Static vs Dynamic rendering
13. ISR, SPA

### Components

1. A React render tree
    1. Top-level components
    1. Leaf components
1. Props
    1. Immutable
    1. Forwarding props
    1. Children
    1. Importance of making them pure
    1. Local mutation
1. JSX
    1. Rules of JSX
    1. Fragment
    1. JavaScript in JSX
    1. HTML VS JSX
    1. Conditional rendering
    1. Key
1. UI as a tree
    1. Render trees
    1. Module Dependency Tree
    1. Bundler
        1. e.g., Webpack
    1. Compiling
    1. Loader
    1. Code splitting
1. Rendering steps
    1. Triggering
    1. Rendering
    1. Committing
    1. Rerendering
    1. Batching updates

### State

1. Behaviour
1. Queueing updates
    1. Updater function
    1. Updating object
1. Local var vs state var
1. Local mutation
1. Lifting state
1. Reducer
1. Declarative vs Imperative UI
1. Event handlers
    1. `onClick`, `onSubmit`, etc.
    1. Stopping propagation
    1. Preventing default
1. Lifecycle Methods
    1. What is Mounting, Unmounting
    1. Phases
        1. Mounting phase
            1. `constructor`
            1. `render`
            1. `getDerivedStateFromProps`
            1. `componentDidMount`
        1. Updating phase
            1. `shouldComponentUpdate`
            1. `componentWillUpdate`
            1. `componentDidUpdate`
            1. `getSnapshotBeforeUpdate`
        1. Unmounting phase
            1. `componentWillUnmount`
        1. Error Handling
            1. `getDerivedStateFromError`
            1. `componentDidCatch`

### Hooks

1. `useState`
    1. Change value
    1. Change value with function
1. `useRef`
    1. HTML
    1. `useState` vs `useRef`
    1. `forwardRef`
    1. `useImperativeHandle`
    1. `flushSync`
1. `useEffect`
    1. Dependency
    1. Return in `useEffect`
1. `useLayoutEffect`
1. `useMemo`
    1. Sample
    1. Recache
    1. Pros and cons
    1. Referential equality
1. `useHistory`
    1. Push
    1. Pop
    1. Replace
    1. Redirect
1. `useNavigate`
    1. `navigate()`
    1. Route
    1. `-1`, `1`
1. `useCallback`
    1. Sample
1. `useMemo` vs `useCallback`
    1. Uses
1. `useContext`
    1. Sample
1. `useReducer`
1. Create custom hooks
1. `useDebugValue`
1. `useTransition`
1. `useDeferredValue`
1. `useId`
    1. Sample
1. `useImperativeHandle`
1. Props
    1. Default prop
    1. PropDrilling
    1. Children

### Components

1. Creating Components
1. Controlled vs Uncontrolled Components
    1. Inputs
1. Higher order components
1. Pure components

### React Router

1. Install
1. Hooks
    1. `useHistory`
    1. `useNavigate`
    1. `use`
    1. `Link`
        1. Replace
        1. `reloadDocument`
        1. `state={}`
    1. `useLocation()`
    1. `NavLink`
        1. `isActive`
        1. End
    1. `Navigate`
        1. `useNavigate`
        1. `navigate(-1)`
1. Types of Router
    1. `BrowserRouter`
    1. `HashRouter`
    1. `HistoryRouter`
    1. `MemoryRouter`
    1. `StaticRouter`
    1. `NativeRouter`
    1. Params (`:id`)
        1. `const {<name>} = useParams()`
    1. `useSearchParams`
1. Nesting Routes
    1. Index
    1. Location
    1. Shared element with children
    1. Outlet
        1. `useOutletContext()`
    1. Nesting in separate file
    1. `useRoute`

### Good to Know

1. Immer
1. `Object.entries(e)`
1. Icons
1. Experimental Hooks
    1. `useEffectEvent`
    1. `use`
    1. `useFormStatus`
    1. `useOptimistic`

### Week 2

1. Render props
1. Higher order components
1. Custom hooks
1. Code splitting
    1. Route based
    1. Component based
    1. `React.lazy`
1. Higher order components
1. Lazy Loading
    1. Fallback UI
    1. Suspense
1. Error boundaries
    1. `componentDidCatch`
    1. Fallback UI
    1. Nested & Propagation
1. `useReducer`
    1. Dispatch
    1. `useReducer` vs `useState`
    1. `useReducer` vs Redux
    1. Payload
1. PropTypes
    1. Types => `name`, `string`, `any`
    1. Required, optional
    1. `node`, `element` type
    1. `oneOf`, `shape`
    1. PropTypes vs TypeScript
1. `useMemo` vs `useCallback`
    1. `React.memo` vs `useMemo`
    1. Object reference
    1. Pros and cons of memoization
1. Context API
    1. Provider
    1. Consumer
    1. `useContext`
    1. `useReducer`

### Webpack

1. Module Bundler
1. Code Splitting
1. Webpack Dev Server
1. Hot Module Replacement (HMR)
1. Tree Shaking
1. Babel
    1. Transpilation
    1. Plugins
    1. Runtime Polyfills
    1. Dynamic Import
1. `useDeferredValue`
1. Dead code elimination
1. `useTransition`

### Others

1. `forwardRef`
1. `useDebugValue`
1. `useImperativeHandle`
1. Axios interceptor
    1. Concurrent Requests
    1. `axios.all()`, `axios.spread()`
    1. Cancel Token
