# Code Style Guidelines

## TypeScript & Imports

- Use strict TypeScript with ES2022 target, CommonJS modules
- Import order:
  1. Node modules
  2. Absolute imports with `@/` alias (e.g., `@/shared/constants`)
- Use `@/` alias for all internal imports instead of relative paths
- Use explicit type annotations for function parameters and return types
- Interface names: PascalCase (e.g., `MangaStructure`, `ServerOptions`)

## Formatting (Prettier)

- Single quotes
- Trailing commas
- 2-space indentation
- Arrow parens: always
- Semicolons: required
- Print width: 80 characters

## Naming Conventions

| Element      | Convention                    | Example                       |
| ------------ | ----------------------------- | ----------------------------- |
| Classes      | PascalCase                    | `Server`, `MangaController`   |
| Methods      | camelCase                     | `mangaList`, `start`          |
| Variables    | camelCase, descriptive        | `mangaList`, `userData`       |
| Constants    | UPPER_SNAKE_CASE              | `API_BASE_URL`, `MAX_RETRIES` |
| Use-cases    | PascalCase + `.use-case.ts`   | `GetMangaListUseCase`         |
| Repositories | PascalCase + `.repository.ts` | `MangadexRepository`          |

## Constants

- Store in `shared/constants.ts`
- Use UPPER_SNAKE_CASE naming

## Interfaces

- Store in `shared/interfaces/`
- Use descriptive names (PascalCase)
