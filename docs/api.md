# API Endpoints

## Available Endpoints

| Method | Endpoint         | Description                                |
| ------ | ---------------- | ------------------------------------------ |
| `GET`  | `/`              | Returns manga list (limited to 50 results) |
| `GET`  | `/:id`           | Returns manga by ID                        |
| `GET`  | `/search/:title` | Search manga by title                      |
| `GET`  | `/chapter/:id`   | Returns chapter images by chapter ID       |

## Response Codes

- `200` - Success
- Appropriate error codes for failures
