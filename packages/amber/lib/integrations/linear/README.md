# Linear Integration

Integration with Linear for Amber AI RAG system.

---

## Setup

### 1. Get Linear API Key

1. Go to: https://linear.app/settings/api
2. Create new API key
3. Copy to `.env`:

```bash
LINEAR_API_KEY="lin_api_xxx"
LINEAR_WEBHOOK_SECRET="xxx"
```

### 2. Configure Webhook

1. Go to: https://linear.app/settings/api/webhooks
2. Create new webhook:
   - URL: `https://your-domain.com/api/webhooks/linear`
   - Events: Issue created, updated, deleted
   - Secret: Save to `LINEAR_WEBHOOK_SECRET`

---

## Usage

### Sync Team Issues

```typescript
import { LinearClient } from '@goup/lib/integrations/linear'

const linear = new LinearClient(process.env.LINEAR_API_KEY)

// Sync all issues from teams
await linear.syncTeams(['team_123', 'team_456'])

// Sync specific project
await linear.syncProject('project_789')

// Incremental sync (only updated since last sync)
await linear.syncTeams(['team_123'], {
  since: new Date('2025-01-20')
})
```

### Query Issues

```typescript
// Get team issues
const issues = await linear.getTeamIssues('team_123')

// Get issue by ID
const issue = await linear.getIssue('issue_id')

// Search issues
const results = await linear.searchIssues({
  status: 'in_progress',
  labels: ['bug', 'high-priority']
})
```

---

## Data Mapping

### Linear Issue → UnifiedTask

```typescript
Linear Issue {
  id: "issue_123"
  title: "Fix login bug"
  description: "Users can't login..."
  state: { name: "In Progress" }
  priority: 1 // Urgent
  assignee: { name: "John" }
  labels: [{ name: "bug" }]
  project: { name: "Web App" }
}

↓ normalize()

UnifiedTask {
  id: "linear_issue_123"
  title: "Fix login bug"
  description: "Users can't login..."
  status: "in_progress"
  priority: "urgent"
  assignee: { name: "John" }
  labels: ["bug"]
  project: "Web App"
  source: {
    type: "linear"
    externalId: "issue_123"
  }
  url: "https://linear.app/team/issue/issue_123"
}
```

### Priority Mapping

| Linear Priority | UnifiedTask Priority |
|-----------------|----------------------|
| 0 (No priority) | low |
| 1 (Urgent) | urgent |
| 2 (High) | high |
| 3 (Medium) | medium |
| 4 (Low) | low |

### Status Mapping

| Linear State | UnifiedTask Status |
|--------------|-------------------|
| Backlog, Todo | todo |
| In Progress | in_progress |
| Done, Completed | done |
| Canceled, Rejected | canceled |

---

## Webhooks

### Handle Real-time Updates

```typescript
// apps/amber-saas/src/app/api/webhooks/linear/route.ts

import { handleLinearWebhook } from '@goup/lib/integrations/linear/webhooks'

export async function POST(req: Request) {
  const signature = req.headers.get('linear-signature')
  const payload = await req.json()

  // Verify signature
  if (!verifyLinearSignature(payload, signature)) {
    return Response.json({ error: 'Invalid signature' }, { status: 401 })
  }

  // Handle webhook
  await handleLinearWebhook(payload)

  return Response.json({ ok: true })
}
```

### Webhook Events

**Issue Created:**
```json
{
  "action": "create",
  "type": "Issue",
  "data": { ... }
}
```

**Issue Updated:**
```json
{
  "action": "update",
  "type": "Issue",
  "data": { ... },
  "updatedFrom": { "stateId": "old_state" }
}
```

**Issue Deleted:**
```json
{
  "action": "delete",
  "type": "Issue",
  "data": { "id": "issue_123" }
}
```

---

## Implementation Plan

### Phase 1: Basic Sync
- [ ] `client.ts` - Linear SDK wrapper
- [ ] `normalizer.ts` - Issue → UnifiedTask
- [ ] `sync.ts` - Sync teams/projects
- [ ] Tests

### Phase 2: Webhooks
- [ ] `webhooks.ts` - Handle real-time updates
- [ ] Signature verification
- [ ] Update Qdrant on webhook
- [ ] Tests

### Phase 3: Advanced
- [ ] Sync comments
- [ ] Sync attachments
- [ ] Incremental sync optimization
- [ ] Batch operations

---

## Files to Create

```
packages/amber/lib/integrations/linear/
├── client.ts              # Linear SDK wrapper
├── normalizer.ts          # Issue → UnifiedTask
├── sync.ts                # Sync logic
├── webhooks.ts            # Webhook handler
├── types.ts               # Linear-specific types
├── client.test.ts         # Tests
└── README.md              # This file
```

---

## Example: Full Flow

```typescript
// 1. Configure Linear integration
const linear = new LinearClient(process.env.LINEAR_API_KEY)

// 2. Initial sync
await linear.syncTeams(['team_123'], { fullSync: true })

// 3. Set up webhook (done in Linear dashboard)

// 4. Real-time updates handled automatically
// Webhook → handleLinearWebhook() → update Qdrant

// 5. Query with Amber AI
const response = await queryAmberAI({
  query: "What bugs are in progress?",
  sources: ['linear'],
  filters: {
    status: 'in_progress',
    labels: ['bug']
  }
})
```

---

## Next Steps

1. ✅ Create `client.ts` with Linear SDK wrapper
2. ✅ Create `normalizer.ts` for Issue → UnifiedTask
3. ✅ Implement `sync.ts` for team/project sync
4. ⏳ Set up webhook handler
5. ⏳ Test with real Linear workspace
