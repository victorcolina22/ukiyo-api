# Architecture

Clean Architecture with layered structure for maintainable and scalable applications.

## Layers

```
src/
├── domain/           # Business logic and repository interfaces
├── application/      # Business use cases and application logic
├── infrastructure/   # External integrations and repository implementations
├── presentation/    # HTTP controllers and routing
└── shared/           # Common utilities, interfaces, and constants
```

## Responsibilities

### Domain Layer

- Business logic and rules
- Repository interfaces (contracts)

### Application Layer

- Use-cases that orchestrate business logic
- Application-specific business rules

### Infrastructure Layer

- External integrations (APIs, databases)
- Repository implementations
- HTTP client implementations

### Presentation Layer

- HTTP controllers
- Routing
- Request/response handling

### Shared Layer

- Common utilities
- Interfaces
- Constants

## Patterns

- Controllers handle HTTP logic, use dependency injection for use-cases
- Use-cases contain business logic and orchestrate repository calls
- Repository interfaces defined in domain, implemented in infrastructure
