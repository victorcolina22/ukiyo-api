# Contributing

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run development server: `pnpm run start:dev`

## Code Quality

Run linting before committing:

```bash
npx eslint .
```

Format code with:

```bash
npx prettier --write .
```

## HTTP Client

- Use **axios** for all HTTP requests in the infrastructure layer
- Import axios at the top of repository files: `import axios from 'axios';`
- Use typed axios requests: `axios.get<ResponseType>(url)`
- Access response data via `response.data` property
- Handle axios errors in try/catch blocks with proper error logging

## Error Handling

- Use try/catch blocks with console.log for debugging
- Throw descriptive Error messages
- Return appropriate HTTP status codes (200 for success)

## Recent Changes

- **feat: add manga search by title endpoint** - Implemented search functionality with new use case, repository method, controller endpoint, and route
