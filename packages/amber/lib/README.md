# @goup/lib

> Business logic for Amber AI (DDD)

## 🎯 Purpose

Domain-Driven Design business logic - services, use cases, and domain rules for Amber AI.

---

## 🏗️ Structure (DDD)

```
lib/src/
├── domains/
│   ├── billing/
│   │   ├── service/        # Business logic
│   │   ├── repository/     # Data access
│   │   ├── data/           # Entities
│   │   └── types/          # TypeScript types
│   │
│   ├── installations/
│   ├── usage/
│   └── auth/
│
└── index.ts
```

---

## 🚀 Usage (TODO)

```typescript
import { BillingService } from '@goup/lib'

const billingService = new BillingService(prisma)

// Check if upgrade is allowed
const canUpgrade = await billingService.canUpgradeToPlan(userId, 'PRO')

// Process usage
await billingService.trackMessageUsage(installationId)
```

---

## 📦 Domains (TODO)

### Billing
- Track usage
- Check limits
- Handle upgrades/downgrades

### Installations
- Create/update/delete
- Validate configuration
- Generate embed code

### Usage
- Log events
- Calculate costs
- Generate analytics

### Auth
- Sync Clerk user
- Manage API keys

---

## 📚 Links

- [Amber README](../README.md)
