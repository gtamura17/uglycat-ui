# @goup/utils

> Pure utility functions - functional programming style

## 🎯 Purpose

Collection of **pure functions** with zero side effects. Follows functional programming principles.

---

## 🚀 Usage

```typescript
import { formatDate, slugify, clamp } from '@goup/utils'

const date = formatDate(new Date(), 'dd/MM/yyyy')
const slug = slugify('Hello World!') // 'hello-world'
const clamped = clamp(150, 0, 100) // 100
```

---

## 📦 Categories (TODO)

### Date
- `formatDate()`
- `parseDate()`
- `addDays()`
- `diffDays()`
- `isExpired()`

### String
- `slugify()`
- `truncate()`
- `capitalize()`
- `camelCase()`
- `snakeCase()`

### Validation
- `isEmail()`
- `isUrl()`
- `isUUID()`
- `isEmpty()`

### Format
- `formatCurrency()`
- `formatNumber()`
- `formatBytes()`

### Array
- `chunk()`
- `unique()`
- `groupBy()`

---

## 🧪 Testing

```bash
pnpm test
pnpm test:watch
```

All functions are 100% test covered.

---

## 📚 Links

- [Shared README](../README.md)
