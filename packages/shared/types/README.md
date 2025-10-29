# @goup/types

> Shared TypeScript types

## 🎯 Purpose

Common TypeScript interfaces and types used across all packages and apps.

---

## 🚀 Usage

```typescript
import type { ApiResponse, PaginatedResponse, PaginationParams } from '@goup/types'

const response: ApiResponse<User[]> = {
  success: true,
  data: users,
}

const paginated: PaginatedResponse<Post> = {
  data: posts,
  pagination: {
    page: 1,
    limit: 10,
    total: 100,
    totalPages: 10,
  },
}
```

---

## 📦 Available Types

### API
- `ApiResponse<T>`
- `PaginatedResponse<T>`
- `PaginationParams`

### Common
- `ID` (string | number)
- `Timestamp` (Date | string)
- `Nullable<T>`

---

## 📚 Links

- [Shared README](../README.md)
