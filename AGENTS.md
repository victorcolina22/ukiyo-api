# AGENTS.md

## Commands

- **Build**: `pnpm run build` - Compiles TypeScript to dist/
- **Dev**: `pnpm run start:dev` - Runs with tsx watch for hot reload
- **Production**: `pnpm run start` - Builds and runs from dist/
- **Lint**: `npx eslint .` - Run ESLint on all files
- **Format**: `npx prettier --write .` - Format all files

## Code Style Guidelines

### TypeScript & Imports

- Use strict TypeScript with ES2022 target, CommonJS modules
- Import order: 1) Node modules, 2) Absolute imports with `@/` alias (e.g., `@/shared/constants`)
- Use `@/` alias for all internal imports instead of relative paths
- Use explicit type annotations for function parameters and return types
- Interface names: PascalCase (e.g., `MangaStructure`, `ServerOptions`)

### Formatting (Prettier)

- Single quotes, trailing commas, 2-space indentation
- Arrow parens: always, semicolons: required
- Print width: 80 characters

### Architecture Patterns

- Clean Architecture with layered structure:
  - `domain/`: Business logic and repository interfaces
  - `application/use-cases/`: Business use cases and application logic
  - `infrastructure/`: External integrations and repository implementations
  - `presentation/`: HTTP controllers and routing
  - `shared/`: Common utilities, interfaces, and constants
- Controllers handle HTTP logic, use dependency injection for use-cases
- Use-cases contain business logic and orchestrate repository calls
- Repository interfaces defined in domain, implemented in infrastructure
- Constants in `shared/constants.ts` using UPPER_SNAKE_CASE
- Interfaces in `shared/interfaces/` with descriptive names

### HTTP Client

- Use **axios** for all HTTP requests in the infrastructure layer
- Import axios at the top of repository files: `import axios from 'axios';`
- Use typed axios requests: `axios.get<ResponseType>(url)`
- Access response data via `response.data` property
- Handle axios errors in try/catch blocks with proper error logging

### Error Handling

- Use try/catch blocks with console.log for debugging
- Throw descriptive Error messages
- Return appropriate HTTP status codes (200 for success)

### Naming Conventions

- Classes: PascalCase (`Server`, `MangaController`)
- Methods: camelCase (`mangaList`, `start`)
- Variables: camelCase, descriptive names
- Constants: UPPER_SNAKE_CASE for environment/config values
- Use-cases: PascalCase with `.use-case.ts` suffix (e.g., `GetMangaListUseCase`)
- Repositories: PascalCase with `.repository.ts` suffix (e.g., `MangadexRepository`)

## API Endpoints

- `GET /` - Returns manga list (limited to 50 results)
- `GET /:id` - Returns manga by ID
- `GET /search/:title` - Search manga by title
- `GET /chapter/:id` - Returns chapter images by chapter ID

## Recent Changes

- **feat: add manga search by title endpoint** - Implemented search functionality with new use case, repository method, controller endpoint, and route
