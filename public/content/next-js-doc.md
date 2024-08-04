# NextJS

1. ### **Theory**

1. Prerendering
    1. SSG (Static site generation)
    1. SSR (Server side rendering)
    1. Suspense SSR Arch
        1. HTML streaming
        1. Selective hydration
    1. ISR (Incremental site generation)
    1. RSC (React server components)
    1. Pros and cons
1. **Routing**
    1. file based
    1. app based
    1. how to route
    1. dynamic route
    1. Catch all segments \[...\<slug\>\]
        1. optional catch all \[\[...\]\]
    1. Navigation
        1. Link component
            1. replace
        1. usePathname
            1. startWith
        1. useRouter
            1. push()
            1. replace()
            1. back()
            1. forward()
    1. Parallel Routes
        1. slots (@)
        1. pros and cons
        1. default.tsx
    1. Conditional Routes
    1. Intercepting Routes
        1. (.)\<route\>
        1. (..)\<route\>
        1. (..)(..)\<route\>
        1. (...)\<route\>
1. **Routing metadata**
    1. why?
    1. static vs dynamic metadata
    1. priority
    1. layout vs page metadata
    1. title metadata
        1. absolute
        1. default
        1. template
1. **Pages**
    1. not-found.tsx & notFound()
    1. loading.tsx
    1. error.tsx
        1. Error boundary
        1. error object
        1. reset
        1. error bubbling
    1. File colocation
    1. private folder
        1. \_
        1. advantages
        1. %5F
    1. Route groups
1. **Layout**
    1. nested layout
    1. route group layout
1. **Templates**
    1. why?
    1. templates vs layout
    1. using both
1. **Component hierarchy**
    1. Layout \> Template \> Error Boundary \> Suspense \> Erro Boudy (not found) \> Page
1. Route Handlers
1. RSC (React server component)
1. API routes
1. Rending
    1. client side
    1. server side
1. Date fetching
1. STyling
1. Optimization

1. Layouting
1. Loading state
1. Error bordering
1. SEO
    1. Metadata
1. Fetching data
    1. Using server comp
    1. In parallel
    1. Fetch data where It’s used
    1. Streaming and suspense
1. Deduplication
1. Caching
    1. ISR (Incremental site generation)
    1. {cache: force-cache}
    1. {cache: no-store}
    1. {next: {revalidate: 60}}
1. Dynamic params
