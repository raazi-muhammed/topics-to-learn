# Angular 20.2 Study Guide

## Table of Contents

1. [Setup](#setup)
2. [TypeScript Best Practices](#typescript-best-practices)
3. [Angular Best Practices](#angular-best-practices)
4. [Theory](#theory)
5. [Core Concepts](#core-concepts)
6. [Advanced Topics](#advanced-topics)
7. [Ecosystem & Tooling](#ecosystem--tooling)
8. [Security](#security)
9. [Web Workers](#web-workers)
10. [Service Workers & PWA](#service-workers--pwa)
11. [Deployment](#deployment)
12. [What's New in Angular 20.2](#whats-new-in-angular-20.2)

## Setup

1.  `npm install -g @angular/cli@latest` (Optional, for global access)
2.  `npx @angular/cli@latest new <appName> --standalone`
3.  `cd <appName>`
4.  `ng serve`

## TypeScript Best Practices

-   Use strict type checking
-   Prefer type inference when the type is obvious
-   Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

-   Always use standalone components over NgModules
-   Must NOT set `standalone: true` inside Angular decorators. It's the default.
-   Use signals for state management
-   Implement lazy loading for feature routes
-   Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
-   Use `NgOptimizedImage` for all static images.
    -   `NgOptimizedImage` does not work for inline base64 images.

## Theory

1.  What is Angular?
2.  Architecture
    1.  Components
    2.  Templates
    3.  Directives
    4.  Dependency Injection
3.  DOM vs Shadow DOM
4.  Change Detection
    1.  Zone.js
    2.  Zoneless Applications
5.  Ahead-of-Time (AOT) vs. Just-in-Time (JIT) Compilation
6.  SPAs vs MPAs
7.  CSR vs SSR

## Core Concepts

1.  **Components**
    1.  Creating Components (`ng generate component <name>`)
    2.  Lifecycle Hooks
    3.  `input()` and `output()` functions
    4.  `@Component` decorator
        1.  `selector`
        2.  `templateUrl` / `template`
        3.  `styleUrls` / `styles`
        4.  `changeDetection: ChangeDetectionStrategy.OnPush`
    5.  Host element bindings (`host` property)
    6.  Content Projection (`ng-content`)
    7.  Querying View & Content (`viewChild`, `contentChild`)
2.  **Templates**
    1.  Interpolation `{{ }}`
    2.  Property Binding `[property]="value"`
    3.  Event Binding `(event)="handler()"` (e.g., `(click)`, `(contextmenu)`)
    4.  Two-way Binding: `[(ngModel)]` (for forms) or with signals (`[value]` and `(input)`) 
    5.  Native Control Flow (`@if`, `@for`, `@switch`)
    6.  Template Literals (New in v20)
    7.  Exponentiation Operator (`**`) (New in v20)
    8.  `in` keyword (New in v20)
    9.  `void` operator (New in v20)
3.  **Directives**
    1.  Built-in directives (Prefer `[class]` and `[style]` bindings over `ngClass` and `ngStyle`)
    2.  Custom directives
4.  **Pipes**
    1.  Using pipes in templates (`|`)
    2.  Built-in pipes (`DatePipe`, `UpperCasePipe`, `JsonPipe`, etc.)
    3.  Creating custom pipes
5.  **Dependency Injection**
    1.  `inject()` function
    2.  `providedIn: 'root'`
    3.  Injection hierarchy
6.  **Signals**
    1.  `signal()`
    3.  `computed()`
    4.  `effect()`
    5.  `toSignal()` and `toObservable()`
    6.  `linkedSignal()`
7.  **Forms**
    1.  Reactive Forms vs. Template-driven Forms
    2.  `FormGroup`, `FormControl`, `FormArray`
    3.  Validators
8.  **HTTP Client**
    1.  `provideHttpClient()` and `withInterceptors()`
    2.  `HttpClient` service
    3.  Making Requests (`get`, `post`, etc.)
    4.  Handling Errors
9.  **RxJS**
    1.  Observables, Observers, Subscriptions
    2.  Common Operators (`map`, `filter`, `tap`, `switchMap`, `mergeMap`)
    3.  `expand` for recursive/batch operations
10. **Custom Decorators**
    1.  Class, Method, Property, and Parameter decorators
11. **Security**
    1.  Cross-Site Scripting (XSS) prevention
    2.  Trusted types
12. **Web Workers**
    1.  `ng generate web-worker <name>`
    2.  Offloading expensive computations
13. **Service Workers & PWA**
    1.  `ng add @angular/pwa`
    2.  App manifests and offline capabilities

## Advanced Topics

1.  **Routing**
    1.  `RouterModule.forRoot()` and `provideRouter()`
    2.  Lazy Loading with `loadComponent` (for standalone components) and `loadChildren` (for modules)
    3.  Route Guards
    4.  `RouterOutlet`
2.  **State Management with NgRx**
    1.  Store, Actions, Reducers, Selectors, Effects
    2.  `@ngrx/store`, `@ngrx/effects`, `@ngrx/entity`, `@ngrx/store-devtools`
3.  **Server-Side Rendering (SSR)**
    1.  Brief overview of Angular Universal
    2.  `ng add @angular/ssr`
    3.  PendingTasks API (Stable in v20)
4.  **Zoneless Change Detection**
    1.  `provideZonelessChangeDetection` (Developer Preview in v20)
5.  **HTTP Interceptors**
    1.  Functional interceptors
    2.  Use cases (logging, auth headers)
6.  **Internationalization (i18n)**
    1.  Marking text for translation
    2.  Generating translation files
7.  **Custom Decorators**
    1.  Class, Method, Property, and Parameter decorators

## Ecosystem & Tooling

1.  **Angular CLI**
    1.  `ng new`, `ng generate`, `ng serve`, `ng build`, `ng test`
2.  **Angular Material**
    1.  UI component library
    2.  `ng add @angular/material`
3.  **Angular CDK (Component Dev Kit)**
4.  **Testing**
    1.  Jasmine and Karma
    2.  `TestBed`
5.  **Linting and Formatting**
    1.  ESLint setup for Angular
    2.  Standard rules and configurations
6.  **Animations**
    1.  CSS-based with `animate.enter` and `animate.leave` (New in v20.2)
    2.  `@angular/animations` module (for complex, state-based animations)
    3.  Triggers, states, and transitions
7.  **Deployment**
    1.  `ng build` for production
    2.  Environment configuration

## What's New in Angular 20.2

1.  **Template Enhancements**: Template literals, exponentiation operator, `in` keyword, `void` operator.
2.  **Developer Experience**: Type-checking for host bindings, diagnostics for invalid nullish coalescing and uninvoked track functions.
3.  **API Stability**: `toSignal`, `toObservable`, `linkedSignal`, `effect`, `afterEveryRender`, `afterNextRender`, and `PendingTasks` are now stable.
4.  **Zoneless Applications**: `provideZonelessChangeDetection` is in developer preview.
5.  **Breaking Changes**: Dropped support for Node 18 and TypeScript < 5.8. `ng-reflect-*` attributes are no longer emitted in dev mode. `InjectFlags` is removed. HammerJS is deprecated.