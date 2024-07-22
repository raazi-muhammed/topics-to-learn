# React Guide

## Set up

```
npx create-react-app <appName>
```

## Components

-   Default is App
-   `rafce`, `tsrafce`
-   Calling function on button click
    -   Without parameter
    -   With parameter
-   Fragments
-   Children Prop

## Theory

-   What is React
-   DOM
    -   DOM vs Virtual DOM
    -   Reconciliation
        -   Working
        -   Diffing Algorithm
        -   React Fibre
            -   Incremental rendering
    -   Shadow DOM
    -   Dynamic rendering
-   Props vs State
-   Server Side vs Client Side Rendering in React
-   Synthetic Events
    -   Event Pooling
-   Life Cycle
    -   View Oriented
-   Memoization
-   Pure functions and components
-   Strict Mode
-   SPAs vs MPAs
-   CSR vs SSR
-   Static vs Dynamic rendering
-   ISR, SPA

## Components

-   A React render tree
    -   Top-level components
    -   Leaf components
-   Props
    -   Immutable
    -   Forwarding props
    -   Children
    -   Importance of making them pure
    -   Local mutation
-   JSX
    -   Rules of JSX
    -   Fragment
    -   JavaScript in JSX
    -   HTML VS JSX
    -   Conditional rendering
    -   Key
-   UI as a tree
    -   Render trees
    -   Module Dependency Tree
    -   Bundler
        -   e.g., Webpack
    -   Compiling
    -   Loader
    -   Code splitting
-   Rendering steps
    -   Triggering
    -   Rendering
    -   Committing
    -   Rerendering
    -   Batching updates

## State

-   Behaviour
-   Queueing updates
    -   Updater function
    -   Updating object
-   Local var vs state var
-   Local mutation
-   Lifting state
-   Reducer
-   Declarative vs Imperative UI
-   Event handlers
    -   `onClick`, `onSubmit`, etc.
    -   Stopping propagation
    -   Preventing default
-   Lifecycle Methods
    -   What is Mounting, Unmounting
    -   Phases
        -   Mounting phase
            -   `constructor`
            -   `render`
            -   `getDerivedStateFromProps`
            -   `componentDidMount`
        -   Updating phase
            -   `shouldComponentUpdate`
            -   `componentWillUpdate`
            -   `componentDidUpdate`
            -   `getSnapshotBeforeUpdate`
        -   Unmounting phase
            -   `componentWillUnmount`
        -   Error Handling
            -   `getDerivedStateFromError`
            -   `componentDidCatch`

## Hooks

-   `useState`
    -   Change value
    -   Change value with function
-   `useRef`
    -   HTML
    -   `useState` vs `useRef`
    -   `forwardRef`
    -   `useImperativeHandle`
    -   `flushSync`
-   `useEffect`
    -   Dependency
    -   Return in `useEffect`
-   `useLayoutEffect`
-   `useMemo`
    -   Sample
    -   Recache
    -   Pros and cons
    -   Referential equality
-   `useHistory`
    -   Push
    -   Pop
    -   Replace
    -   Redirect
-   `useNavigate`
    -   `navigate()`
    -   Route
    -   `-1`, `1`
-   `useCallback`
    -   Sample
-   `useMemo` vs `useCallback`
    -   Uses
-   `useContext`
    -   Sample
-   `useReducer`
-   Create custom hooks
-   `useDebugValue`
-   `useTransition`
-   `useDeferredValue`
-   `useId`
    -   Sample
-   `useImperativeHandle`
-   Props
    -   Default prop
    -   PropDrilling
    -   Children

## Components

-   Creating Components
-   Controlled vs Uncontrolled Components
    -   Inputs
-   Higher order components
-   Pure components

## React Router

-   Install
-   Hooks
    -   `useHistory`
    -   `useNavigate`
    -   `use`
    -   `Link`
        -   Replace
        -   `reloadDocument`
        -   `state={}`
    -   `useLocation()`
    -   `NavLink`
        -   `isActive`
        -   End
    -   `Navigate`
        -   `useNavigate`
        -   `navigate(-1)`
-   Types of Router
    -   `BrowserRouter`
    -   `HashRouter`
    -   `HistoryRouter`
    -   `MemoryRouter`
    -   `StaticRouter`
    -   `NativeRouter`
    -   Params (`:id`)
        -   `const {<name>} = useParams()`
    -   `useSearchParams`
-   Nesting Routes
    -   Index
    -   Location
    -   Shared element with children
    -   Outlet
        -   `useOutletContext()`
    -   Nesting in separate file
    -   `useRoute`

## Good to Know

-   Immer
-   `Object.entries(e)`
-   Icons
-   Experimental Hooks
    -   `useEffectEvent`
    -   `use`
    -   `useFormStatus`
    -   `useOptimistic`

## Week 2

-   Render props
-   Higher order components
-   Custom hooks
-   Code splitting
    -   Route based
    -   Component based
    -   `React.lazy`
-   Higher order components
-   Lazy Loading
    -   Fallback UI
    -   Suspense
-   Error boundaries
    -   `componentDidCatch`
    -   Fallback UI
    -   Nested & Propagation
-   `useReducer`
    -   Dispatch
    -   `useReducer` vs `useState`
    -   `useReducer` vs Redux
    -   Payload
-   PropTypes
    -   Types => `name`, `string`, `any`
    -   Required, optional
    -   `node`, `element` type
    -   `oneOf`, `shape`
    -   PropTypes vs TypeScript
-   `useMemo` vs `useCallback`
    -   `React.memo` vs `useMemo`
    -   Object reference
    -   Pros and cons of memoization
-   Context API
    -   Provider
    -   Consumer
    -   `useContext`
    -   `useReducer`

## Webpack

-   Module Bundler
-   Code Splitting
-   Webpack Dev Server
-   Hot Module Replacement (HMR)
-   Tree Shaking
-   Babel
    -   Transpilation
    -   Plugins
    -   Runtime Polyfills
    -   Dynamic Import
-   `useDeferredValue`
-   Dead code elimination
-   `useTransition`

## Others

-   `forwardRef`
-   `useDebugValue`
-   `useImperativeHandle`
-   Axios interceptor
    -   Concurrent Requests
    -   `axios.all()`, `axios.spread()`
    -   Cancel Token
