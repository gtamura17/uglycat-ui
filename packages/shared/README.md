# Shared Packages

> Universal packages reusable across ALL products

## 🎯 What Goes Here?

**Shared packages are:**
- ✅ Product-agnostic
- ✅ Reusable across all apps/products
- ✅ Stable APIs
- ✅ Zero business logic

**Examples:**
- UI components (buttons, cards, forms)
- Pure utility functions (date, string, validation)
- Common TypeScript types

---

## 📦 Packages

### [@goup/ui](./ui/README.md)
**Design System** (Shadcn/ui + Radix)
- 30+ components
- Dark premium theme
- Fully accessible (ARIA)
- Responsive

### [@goup/utils](./utils/README.md)
**Pure Functions**
- Date utilities
- String helpers
- Validation functions
- Format utilities

### [@goup/types](./types/README.md)
**TypeScript Types**
- Common interfaces
- API response types
- Utility types

---

## 🚀 Usage

```typescript
// UI Components
import { Button, Card, Input } from '@goup/ui'

// Utils
import { formatDate, slugify } from '@goup/utils'

// Types
import type { ApiResponse, PaginatedResponse } from '@goup/types'
```

---

## 📚 Links

- [UI README](./ui/README.md)
- [Utils README](./utils/README.md)
- [Types README](./types/README.md)
