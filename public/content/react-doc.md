# React

1. ## **Set up**

1. npx create-react-app \<appName \>
1. components
    1. default is App
1. rafce, tsrafce
1. calling function on button click
    1. without parameter
    1. with parameter
1. Fragments
1. Children Prop

1. ## **Theory**

1. What is React
1. DOM
    1. DOM vs Virtual DOM
    1. Reconciliation
        1. working
    1. Diffing Algorithm
    1. React Fibre
        1. incremental rendering
    1. Shadow DOM
1. Dynamic rendering
1. props vs state
1. Server Side vs Client Side Rendering in React
1. Synthetic Events
    1. Event Pooling
1. Life Cycle
1. View Oriented
1. Memoization
1. Pure functions and components
1. Strict Mode
1. SPAs vs MPAs
1. CSR vs SSR
1. Static vs Dynamic rendering
    1. ISR, SPA
1. **Components**
    1. A React render tree
        1. top-level components
        1. leaf components
    1. Props
        1. immutable
    1. Forwarding props
    1. children
    1. Importance of making them pure
    1. local mutation
1. **JSX**
    1. Rules of JSX
    1. Fragment
    1. JavaScript in JSX
    1. HTML VS JSX
1. Conditional rendering
1. Key
1. **UI as a tree**
    1. Render trees
    1. Module Dependency Tree
    1. Bundler
        1. eg: Webpack
        1. Compiling
        1. Loader
        1. Code splitting
1. **Rendering steps**
    1. Triggering
    1. Rendering
    1. Committing
1. Rerendering
1. Batching updates
1. **State**
    1. Behaviour
    1. Queueing updates
    1. Updater function
    1. Updating object
    1. local var vs state var
    1. local mutation
    1. Lifting state
    1. Reducer
1. Declarative vs Imperative UI
1. **Event handlers**
    1. onClick, onSubmit etc…d
    1. Stopping propagation
    1. Preventing default
1. Lifecycle Methods
    1. What is Mounting, Unmounting
    1. **Phases**
    1. **\- Mounting phase**
        1. constructor
        1. render
        1. getDerivedStateFromProps
        1. componentDidMount
    1. **\- Updating phase**
        1. shouldComponentUpdate
        1. componentWillUpdate
        1. componentDidUpdate
            1. getSnapshotBeforeUpdate
    1. **\- Unmounting phase**
        1. componentWillUnmount
    1. **\- Error Handling**
        1. getDerivedStateFromError
        1. componentDidCatch
1. **Hooks**
    1. useState
        1. changeValue
        1. changeValueWithFunction
    1. useRef
        1. html
        1. useState vs useRef
        1. forwardRef
        1. useImperativeHandle
        1. flushSync
    1. **useEffect**
        1. dependency
        1. return in useEffect
        1. useLayoutEffect
    1. useMemo
        1. sample
        1. recache
        1. pros and cons
        1. referential equality
    1. useHistory
        1. push
        1. pop
        1. replace
        1. Redirect
    1. useNavigate
        1. navigate()
            1. route
            1. \-1, 1
    1. useCallback
        1. sample
        1. useMemo vs useCallback
        1. uses
    1. useContext
        1. sample
    1. useReducer
    1. **Create custom hooks**
        1. useDebugValue
    1. useTransition
    1. useDeferredValue
    1. useId
        1. sample
    1. useImperativeHandle
1. **Props**
    1. default prop
    1. PropDrilling
    1. Children
1. **Components**
    1. Creating Components
    1. Controlled vs Uncontrolled Components
        1. Inputs
    1. Higher order components
    1. Pure components
1. **React Router**

    1. install
    1. **Hooks**
        1. useHistory
        1. useNavigate
    1. use
    1. **Link**
        1. replace
        1. reloadDocument
        1. state={}
        1. \- useLocation()
        1. **NavLink**
            1. \-isActive
            1. end
        1. **Navigate**
            1. useNavigate
            1. navigate(-1)
    1. **Types of Router**
        1. BrowserRouter
        1. HashRouter
        1. HistoryRouter
        1. MemoryRouter
        1. StaticRouter
        1. NativeRouter
    1. params (:id)
    1. const {\<name\>} \= useParams()
    1. useSearchParams
    1. **Nesting Routes**
        1. index
        1. location
        1. shared element with children
        1. outlet
        1. \- useOutletContext()
        1. Nesting in separate file
        1. useRoute

1. ## **Good to Know**

1. Immer
1. Object.entries(e)
1. Icons
1. Experimental Hooks
    1. useEffectEvent
    1. use
    1. useFormStatus
1. useOptimistic

1. ## **Week 2**

1. Render props
1. Higher order components
1. Custom hooks
1. Code splitting
    1. Route based
    1. Component based
    1. React.lazy
1. Higher order comps
1. **Lazy Loading**
    1. fallback ui
        1. suspense
        1. **Error boundaries**
        1. componentDidCatch
        1. Fallback UI
        1. Nested & Propagation
1. **useReducer**
    1. Dispatch
    1. useReducer vs useState
    1. useReducer vs redux
    1. payload
1. **PropTypes**
    1. types \=\> name, string, any
    1. required, optional,
    1. node, element type
    1. oneof, shape
    1. PropTypes vs Typescript
1. **useMemo vs useCallback**
    1. React.Memo vs useMemo
    1. Object reference
    1. Pros and cons of memoization
1. **Context API**
    1. Provider
    1. Consumer
    1. useContext
    1. useReducer
1. **Webpack**
    1. Module Bundler
    1. Code Splitting
    1. Webpack Dev Server
    1. Hot Module Replacement (HMR)
    1. Tree Shaking
1. **Babel**
    1. Transpilation
    1. Plugins
    1. Runtime Polyfills
    1. Dynamic Import
1. useDeferedValue
1. dead code elimination
1. useTransition

1. ## **Others**

    1. forward ref
    1. useDebugValue
    1. useImperativeHandle
    1. Axios interceptor
    1. Concurrent Requests
        1. axios.all(), axios.spread()
        1. cancel Token
