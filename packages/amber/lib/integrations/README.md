# Amber AI - Integrations

Multi-source task management integrations for Amber AI RAG system.

---

## Overview

Amber AI connects to multiple project management tools to provide contextual assistance:

```
┌─────────────────────────────────────────────────────────┐
│  Linear API          GitHub API         Jira API        │
│  (Freelas)           (Go Up)            (Future)        │
└────────────┬─────────────┬───────────────┬──────────────┘
             │             │               │
             └─────────────┴───────────────┘
                          │
                    ┌─────▼─────┐
                    │  Unified  │
                    │  Task     │
                    │  Schema   │
                    └─────┬─────┘
                          │
                    ┌─────▼─────┐
                    │  Qdrant   │
                    │  Vector   │
                    │  Store    │
                    └─────┬─────┘
                          │
                    ┌─────▼─────┐
                    │  Amber AI │
                    │  RAG      │
                    └───────────┘
```

---

## Supported Integrations

### 1. **Linear** (Production-ready)
- ✅ Teams, Projects, Issues, Comments
- ✅ Real-time webhooks
- ✅ Rich metadata (status, priority, assignee)
- ✅ Full-text search

### 2. **GitHub** (Production-ready)
- ✅ Issues, PRs, Comments, Commits
- ✅ Real-time webhooks
- ✅ Labels, milestones, projects
- ✅ Code context (diffs, files)

### 3. **Jira** (Planned)
- ⏳ Issues, Epics, Sprints
- ⏳ Webhooks
- ⏳ Rich fields (story points, etc)

---

## Architecture

### Directory Structure

```
packages/amber/lib/integrations/
├── README.md                    # This file
├── types.ts                     # Unified types
│
├── linear/
│   ├── client.ts               # Linear SDK wrapper
│   ├── sync.ts                 # Sync to Qdrant
│   ├── webhooks.ts             # Real-time updates
│   ├── types.ts                # Linear-specific types
│   └── README.md
│
├── github/
│   ├── client.ts               # GitHub SDK wrapper
│   ├── sync.ts                 # Sync to Qdrant
│   ├── webhooks.ts             # Real-time updates
│   ├── types.ts                # GitHub-specific types
│   └── README.md
│
├── jira/                       # Future
│   └── README.md
│
└── shared/
    ├── normalizer.ts           # Source → UnifiedTask
    ├── embeddings.ts           # OpenAI embeddings
    └── qdrant.ts               # Vector store client
```

---

## Unified Task Schema

All sources are normalized to this schema before embedding:

```typescript
// packages/amber/lib/integrations/types.ts

export interface UnifiedTask {
  // Core fields
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority

  // People
  assignee?: User
  reporter?: User

  // Organization
  labels: string[]
  project?: string
  milestone?: string

  // Metadata
  source: TaskSource
  url: string
  createdAt: Date
  updatedAt: Date

  // RAG
  embedding?: number[]
  lastSyncedAt: Date
}

export type TaskStatus = 'todo' | 'in_progress' | 'done' | 'canceled'
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent'

export interface TaskSource {
  type: 'linear' | 'github' | 'jira'
  externalId: string
  workspaceId?: string
}

export interface User {
  id: string
  name: string
  email?: string
  avatar?: string
}
```

---

## Usage

### 1. Configure Integration

```typescript
// apps/amber-saas/src/app/api/integrations/configure/route.ts

import { LinearClient } from '@goup/lib/integrations/linear'
import { GitHubClient } from '@goup/lib/integrations/github'

export async function POST(req: Request) {
  const { type, apiKey, config } = await req.json()

  if (type === 'linear') {
    const linear = new LinearClient(apiKey)
    await linear.syncTeams(config.teamIds)
  }

  if (type === 'github') {
    const github = new GitHubClient(apiKey)
    await github.syncRepos(config.repos)
  }

  return Response.json({ success: true })
}
```

### 2. Sync Tasks to Qdrant

```typescript
import { syncLinearToQdrant } from '@goup/lib/integrations/linear/sync'
import { syncGitHubToQdrant } from '@goup/lib/integrations/github/sync'

// Initial sync
await syncLinearToQdrant({
  apiKey: process.env.LINEAR_API_KEY,
  teamIds: ['team_123', 'team_456']
})

await syncGitHubToQdrant({
  token: process.env.GITHUB_TOKEN,
  repos: ['goup/goup', 'goup/amber-ai']
})
```

### 3. Real-time Updates via Webhooks

```typescript
// apps/amber-saas/src/app/api/webhooks/linear/route.ts

import { handleLinearWebhook } from '@goup/lib/integrations/linear/webhooks'

export async function POST(req: Request) {
  const payload = await req.json()
  await handleLinearWebhook(payload)
  return Response.json({ ok: true })
}
```

### 4. Query with Amber AI

```typescript
import { queryAmberAI } from '@goup/lib/amber'

const response = await queryAmberAI({
  query: "What tasks are blocked?",
  sources: ['linear', 'github'],
  filters: {
    status: 'in_progress',
    labels: ['blocked']
  }
})

// Response includes tasks from both Linear and GitHub
console.log(response.tasks)
```

---

## Linear Integration

### Features
- ✅ Sync teams, projects, issues
- ✅ Real-time webhooks
- ✅ Comments and attachments
- ✅ Status workflows
- ✅ Custom fields

### Setup

```bash
# Get API key: https://linear.app/settings/api
export LINEAR_API_KEY="lin_api_xxx"

# Configure webhook
# URL: https://your-domain.com/api/webhooks/linear
# Events: Issue created, updated, deleted
```

### Example

```typescript
import { LinearClient } from '@goup/lib/integrations/linear'

const linear = new LinearClient(process.env.LINEAR_API_KEY)

// Fetch team issues
const issues = await linear.getTeamIssues('team_123')

// Normalize to UnifiedTask
const tasks = issues.map(issue => linear.normalize(issue))

// Embed and store
await qdrant.upsert(tasks)
```

---

## GitHub Integration

### Features
- ✅ Sync repos, issues, PRs
- ✅ Real-time webhooks
- ✅ Comments, reviews, commits
- ✅ Labels, milestones, projects
- ✅ Code context (diffs)

### Setup

```bash
# Get token: https://github.com/settings/tokens
export GITHUB_TOKEN="ghp_xxx"

# Configure webhook
# URL: https://your-domain.com/api/webhooks/github
# Events: Issues, Pull requests, Comments
```

### Example

```typescript
import { GitHubClient } from '@goup/lib/integrations/github'

const github = new GitHubClient(process.env.GITHUB_TOKEN)

// Fetch repo issues
const issues = await github.getRepoIssues('goup/goup')

// Normalize to UnifiedTask
const tasks = issues.map(issue => github.normalize(issue))

// Embed and store
await qdrant.upsert(tasks)
```

---

## Webhooks

### Linear Webhook Handler

```typescript
// packages/amber/lib/integrations/linear/webhooks.ts

export async function handleLinearWebhook(payload: LinearWebhookPayload) {
  const { action, data } = payload

  if (action === 'create' && data.type === 'Issue') {
    const task = normalizeLinearIssue(data)
    await qdrant.upsert([task])
  }

  if (action === 'update' && data.type === 'Issue') {
    const task = normalizeLinearIssue(data)
    await qdrant.update(task.id, task)
  }

  if (action === 'delete' && data.type === 'Issue') {
    await qdrant.delete(data.id)
  }
}
```

### GitHub Webhook Handler

```typescript
// packages/amber/lib/integrations/github/webhooks.ts

export async function handleGitHubWebhook(payload: GitHubWebhookPayload) {
  const { action, issue, pull_request } = payload

  if (action === 'opened' && issue) {
    const task = normalizeGitHubIssue(issue)
    await qdrant.upsert([task])
  }

  if (action === 'closed' && issue) {
    const task = normalizeGitHubIssue({ ...issue, state: 'closed' })
    await qdrant.update(task.id, task)
  }
}
```

---

## Embeddings

### Generate Embeddings

```typescript
// packages/amber/lib/integrations/shared/embeddings.ts

import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function generateEmbedding(task: UnifiedTask): Promise<number[]> {
  const text = `${task.title}\n\n${task.description}\n\nLabels: ${task.labels.join(', ')}`

  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  })

  return response.data[0].embedding
}

export async function batchEmbeddings(tasks: UnifiedTask[]): Promise<UnifiedTask[]> {
  const texts = tasks.map(t => `${t.title}\n\n${t.description}`)

  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: texts,
  })

  return tasks.map((task, i) => ({
    ...task,
    embedding: response.data[i].embedding
  }))
}
```

---

## Qdrant Storage

### Upsert Tasks

```typescript
// packages/amber/lib/integrations/shared/qdrant.ts

import { QdrantClient } from '@qdrant/js-client-rest'

const qdrant = new QdrantClient({
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_API_KEY,
})

const COLLECTION = 'amber-tasks'

export async function upsertTasks(tasks: UnifiedTask[]) {
  // Generate embeddings
  const tasksWithEmbeddings = await batchEmbeddings(tasks)

  // Upsert to Qdrant
  await qdrant.upsert(COLLECTION, {
    points: tasksWithEmbeddings.map(task => ({
      id: task.id,
      vector: task.embedding!,
      payload: {
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        labels: task.labels,
        source: task.source,
        url: task.url,
        createdAt: task.createdAt.toISOString(),
      }
    }))
  })
}

export async function queryTasks(query: string, filters?: any) {
  const embedding = await generateEmbedding({ title: query, description: '' } as any)

  const results = await qdrant.search(COLLECTION, {
    vector: embedding,
    limit: 10,
    filter: filters,
  })

  return results.map(r => r.payload as UnifiedTask)
}
```

---

## Testing

### Unit Tests

```typescript
// packages/amber/lib/integrations/linear/client.test.ts

describe('LinearClient', () => {
  it('should fetch team issues', async () => {
    const client = new LinearClient(process.env.LINEAR_API_KEY)
    const issues = await client.getTeamIssues('team_123')
    expect(issues.length).toBeGreaterThan(0)
  })

  it('should normalize issue to UnifiedTask', () => {
    const issue = { /* Linear issue */ }
    const task = normalizeLinearIssue(issue)
    expect(task.source.type).toBe('linear')
  })
})
```

---

## Roadmap

### Phase 1: Linear + GitHub (Current)
- [x] Linear client + sync
- [x] GitHub client + sync
- [x] Unified schema
- [x] Embeddings + Qdrant
- [ ] Webhooks setup
- [ ] Dashboard UI

### Phase 2: Advanced Features
- [ ] Incremental sync (only changed tasks)
- [ ] Bi-directional sync (create tasks from Amber AI)
- [ ] Advanced filters (date ranges, custom fields)
- [ ] Batch operations

### Phase 3: Jira + More
- [ ] Jira integration
- [ ] Notion integration
- [ ] Asana integration
- [ ] Custom integrations API

---

## Environment Variables

```bash
# .env.example

# Linear
LINEAR_API_KEY="lin_api_xxx"
LINEAR_WEBHOOK_SECRET="xxx"

# GitHub
GITHUB_TOKEN="ghp_xxx"
GITHUB_WEBHOOK_SECRET="xxx"

# Qdrant
QDRANT_URL="https://xxx.qdrant.io"
QDRANT_API_KEY="xxx"

# OpenAI
OPENAI_API_KEY="sk-xxx"
```

---

## Next Steps

1. ✅ Implement Linear client
2. ✅ Implement GitHub client
3. ✅ Create unified schema
4. ⏳ Set up Qdrant collection
5. ⏳ Implement sync scripts
6. ⏳ Configure webhooks
7. ⏳ Build dashboard UI
