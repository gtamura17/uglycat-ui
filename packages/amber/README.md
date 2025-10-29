# Amber Packages

> Product-specific packages for Amber AI

## 🎯 What Goes Here?

**Amber packages contain:**
- ✅ Business logic specific to Amber AI product
- ✅ Database schema (Prisma)
- ✅ Configuration (plans, routes, constants)
- ✅ Domain services (DDD)

**Not for other products** - these packages are Amber-only.

---

## 📦 Packages

### [@goup/database](./database/README.md)
**Prisma Schema + Client**
- 8 models (User, Installation, Subscription, etc)
- Relations and constraints
- Type-safe client

### [@goup/config](./config/README.md)
**Constants & Configuration**
- Subscription plans
- Routes
- App constants

### [@goup/lib](./lib/README.md)
**Business Logic (DDD)**
- Domain services
- Use cases
- Business rules

---

## 🚀 Usage

```typescript
// Database
import { prisma } from '@goup/database'
import type { User, Installation } from '@goup/database'

// Config
import { PLANS, ROUTES } from '@goup/config'

// Business logic
import { createInstallation } from '@goup/lib'
```

---

## 📚 Links

- [Database README](./database/README.md)
- [Config README](./config/README.md)
- [Lib README](./lib/README.md)
