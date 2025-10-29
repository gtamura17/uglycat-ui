# @goup/database

> Prisma schema + PostgreSQL client for Amber AI

## 🎯 Purpose

Type-safe database client and schema for all Amber AI data.

---

## 🚀 Quick Start

### Setup

```bash
# Generate Prisma client
pnpm --filter @goup/database db:generate

# Push schema to database
pnpm --filter @goup/database db:push

# Create migration
pnpm --filter @goup/database db:migrate

# Seed database
pnpm --filter @goup/database db:seed

# Open Prisma Studio
pnpm --filter @goup/database db:studio
```

### Usage

```typescript
import { prisma } from '@goup/database'
import type { User, Installation, Subscription } from '@goup/database'

// Create user
const user = await prisma.user.create({
  data: {
    clerkId: 'user_xyz',
    email: 'user@example.com',
    name: 'John Doe',
  },
})

// Find installations
const installations = await prisma.installation.findMany({
  where: { userId: user.id, status: 'ACTIVE' },
  include: { user: true, sessions: true },
})

// Update subscription
await prisma.subscription.update({
  where: { userId: user.id },
  data: { messagesUsed: { increment: 1 } },
})
```

---

## 📊 Schema Overview

### Models (8)

**1. User**
- Auth integration (Clerk)
- Profile data
- Relations: installations, subscription, apiKeys

**2. Installation**
- Widget configuration
- Branding (colors, avatar, position)
- Status tracking
- Relations: user, sessions, messages

**3. Subscription**
- Stripe integration
- Plan and usage limits
- Billing period
- Relations: user

**4. Session**
- Chat sessions
- Metadata (userAgent, IP)
- Relations: installation, messages

**5. Message**
- Chat messages (user/assistant)
- Metadata (latency, tokens)
- Relations: installation, session

**6. ApiKey**
- External integrations
- Hashed keys
- Relations: user

**7. WebhookEvent**
- Stripe/Clerk webhooks
- Event processing log
- No relations (standalone)

**8. UsageLog**
- Analytics events
- Event tracking
- No relations (standalone)

---

## 📐 Schema Details

### User → Installation (1:N)
```prisma
model User {
  installations Installation[]
}

model Installation {
  userId String
  user   User   @relation(fields: [userId], references: [id])
}
```

### User → Subscription (1:1)
```prisma
model User {
  subscription Subscription?
}

model Subscription {
  userId String @unique
  user   User   @relation(fields: [userId], references: [id])
}
```

### Installation → Session → Message (1:N:N)
```prisma
model Installation {
  sessions Session[]
  messages Message[]
}

model Session {
  installationId String
  installation   Installation @relation(...)
  messages       Message[]
}

model Message {
  installationId String
  sessionId      String
  installation   Installation @relation(...)
  session        Session      @relation(...)
}
```

---

## 🔍 Indexes

Performance-critical indexes:
- `User.clerkId` (unique)
- `User.email` (unique)
- `Installation.clientId` (unique)
- `Installation.userId`
- `Subscription.stripeCustomerId` (unique)
- `Session.sessionId` (unique)
- `Message.createdAt` (for ordering)

---

## 🛠️ Common Queries

### Find User with Subscription
```typescript
const user = await prisma.user.findUnique({
  where: { clerkId: 'user_xyz' },
  include: { subscription: true },
})
```

### Get Installation Stats
```typescript
const stats = await prisma.installation.aggregate({
  where: { userId },
  _count: true,
  _sum: { messageCount: true },
})
```

### Recent Messages
```typescript
const messages = await prisma.message.findMany({
  where: { installationId },
  orderBy: { createdAt: 'desc' },
  take: 10,
  include: { session: true },
})
```

### Check Usage Limits
```typescript
const subscription = await prisma.subscription.findUnique({
  where: { userId },
  select: {
    plan: true,
    messageLimit: true,
    messagesUsed: true,
  },
})

const withinLimit = subscription.messagesUsed < subscription.messageLimit
```

---

## 🗄️ Migrations

### Create Migration
```bash
pnpm --filter @goup/database db:migrate
# Enter migration name
```

### Apply Migrations (Production)
```bash
DATABASE_URL=<prod-url> pnpm --filter @goup/database db:migrate deploy
```

### Reset Database (Dev only!)
```bash
pnpm --filter @goup/database db:push --force-reset
```

---

## 🌱 Seeding

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed data
  const user = await prisma.user.create({
    data: {
      clerkId: 'user_test',
      email: 'test@example.com',
      name: 'Test User',
    },
  })

  await prisma.subscription.create({
    data: {
      userId: user.id,
      plan: 'FREE',
      messageLimit: 100,
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  })
}

main()
```

---

## 🚨 Troubleshooting

### Prisma Client not found
```bash
pnpm --filter @goup/database db:generate
```

### Type errors after schema changes
```bash
pnpm --filter @goup/database db:generate
pnpm build
```

### Migration conflicts
```bash
# Dev: reset and resync
pnpm --filter @goup/database db:push --force-reset

# Prod: resolve manually
```

---

## 📚 Links

- [Prisma Docs](https://prisma.io/docs)
- [Amber README](../README.md)
- [Packages README](../../README.md)
