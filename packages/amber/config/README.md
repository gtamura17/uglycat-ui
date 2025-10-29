# @goup/config

> Constants and configuration for Amber AI

## 🎯 Purpose

Centralized configuration - plans, routes, and constants used across Amber AI apps.

---

## 🚀 Usage

```typescript
import { PLANS, ROUTES, APP_NAME, DEFAULT_ACCENT_COLOR } from '@goup/config'

// Plans
const starterPlan = PLANS.STARTER
console.log(starterPlan.price) // 99
console.log(starterPlan.messageLimit) // 5000

// Routes
const dashboardUrl = ROUTES.DASHBOARD // '/dashboard'
const installationUrl = ROUTES.INSTALLATION_DETAIL('123') // '/dashboard/installations/123'

// Constants
const appName = APP_NAME // 'Amber AI'
const color = DEFAULT_ACCENT_COLOR // '#22d3ee'
```

---

## 📦 Exports

### plans.ts

```typescript
export const PLANS = {
  FREE: {
    id: 'FREE',
    name: 'Free',
    price: 0,
    messageLimit: 100,
    installationLimit: 1,
  },
  STARTER: {
    id: 'STARTER',
    name: 'Starter',
    price: 99,
    messageLimit: 5000,
    installationLimit: 3,
    stripePriceId: process.env.STRIPE_PRICE_STARTER,
  },
  PRO: {
    id: 'PRO',
    name: 'Pro',
    price: 299,
    messageLimit: 20000,
    installationLimit: 10,
    stripePriceId: process.env.STRIPE_PRICE_PRO,
  },
  ENTERPRISE: {
    id: 'ENTERPRISE',
    name: 'Enterprise',
    price: 999,
    messageLimit: -1, // unlimited
    installationLimit: -1, // unlimited
    stripePriceId: process.env.STRIPE_PRICE_ENTERPRISE,
  },
}
```

### routes.ts

```typescript
export const ROUTES = {
  HOME: '/',
  PRICING: '/pricing',
  DOCS: '/docs',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  DASHBOARD: '/dashboard',
  INSTALLATIONS: '/dashboard/installations',
  INSTALLATION_NEW: '/dashboard/installations/new',
  INSTALLATION_DETAIL: (id: string) => `/dashboard/installations/${id}`,
  BILLING: '/dashboard/billing',
  SETTINGS: '/dashboard/settings',
  API_CHAT: (installationId: string) => `/api/chat/${installationId}`,
  // ... more routes
}
```

### constants.ts

```typescript
export const APP_NAME = 'Amber AI'
export const APP_DESCRIPTION = 'White-label AI chat for digital agencies'

export const WIDGET_POSITIONS = [
  { value: 'bottom-right', label: 'Bottom Right' },
  { value: 'bottom-left', label: 'Bottom Left' },
  { value: 'top-right', label: 'Top Right' },
  { value: 'top-left', label: 'Top Left' },
]

export const DEFAULT_ACCENT_COLOR = '#22d3ee'
export const DEFAULT_ASSISTANT_NAME = 'Amber AI'

export const RATE_LIMIT_MESSAGES_PER_MINUTE = 10
export const USAGE_ALERT_THRESHOLD = 0.8 // 80%
export const COST_PER_MESSAGE = 0.01 // $0.01
```

---

## 📚 Links

- [Amber README](../README.md)
