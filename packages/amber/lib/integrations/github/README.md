# GitHub Integration

Integration with GitHub for Amber AI RAG system.

---

## Setup

### 1. Get GitHub Token

1. Go to: https://github.com/settings/tokens
2. Generate new token (classic):
   - Scopes: `repo`, `read:org`, `read:project`
3. Copy to `.env`:

```bash
GITHUB_TOKEN="ghp_xxx"
GITHUB_WEBHOOK_SECRET="xxx"
```

### 2. Configure Webhook

1. Go to: `https://github.com/ORG/REPO/settings/hooks`
2. Add webhook:
   - URL: `https://your-domain.com/api/webhooks/github`
   - Content type: `application/json`
   - Events: Issues, Pull requests, Issue comments
   - Secret: Save to `GITHUB_WEBHOOK_SECRET`

---

## Usage

### Sync Repository Issues

```typescript
import { GitHubClient } from '@goup/lib/integrations/github'

const github = new GitHubClient(process.env.GITHUB_TOKEN)

// Sync all issues from repos
await github.syncRepos([
  { owner: 'goup', repo: 'goup' },
  { owner: 'goup', repo: 'amber-ai' }
])

// Sync specific repo with PRs
await github.syncRepo({ owner: 'goup', repo: 'goup' }, {
  syncPRs: true,
  syncCodeContext: true
})

// Incremental sync
await github.syncRepos([...], {
  since: new Date('2025-01-20')
})
```

### Query Issues

```typescript
// Get repo issues
const issues = await github.getRepoIssues('goup', 'goup')

// Get issue by number
const issue = await github.getIssue('goup', 'goup', 123)

// Get PRs
const prs = await github.getRepoPRs('goup', 'goup')
```

---

## Data Mapping

### GitHub Issue → UnifiedTask

```typescript
GitHub Issue {
  number: 123
  title: "Fix login bug"
  body: "Users can't login..."
  state: "open"
  labels: [{ name: "bug" }, { name: "high-priority" }]
  assignee: { login: "john" }
  milestone: { title: "v1.0" }
}

↓ normalize()

UnifiedTask {
  id: "github_goup_goup_123"
  title: "Fix login bug"
  description: "Users can't login..."
  status: "in_progress"
  priority: "high"
  assignee: { name: "john" }
  labels: ["bug", "high-priority"]
  milestone: "v1.0"
  source: {
    type: "github"
    externalId: "123"
    repositoryId: "goup/goup"
  }
  url: "https://github.com/goup/goup/issues/123"
}
```

### Priority Mapping

| GitHub Labels | UnifiedTask Priority |
|---------------|----------------------|
| `priority-urgent` | urgent |
| `priority-high` | high |
| `priority-medium` | medium |
| `priority-low` | low |
| (none) | medium |

### Status Mapping

| GitHub State | UnifiedTask Status |
|--------------|-------------------|
| `open` (no assignee) | todo |
| `open` (has assignee) | in_progress |
| `closed` (merged PR) | done |
| `closed` (not merged) | canceled |

---

## Pull Requests

### Sync PRs with Code Context

```typescript
await github.syncRepo({ owner: 'goup', repo: 'goup' }, {
  syncPRs: true,
  syncCodeContext: true // Include diff summary
})
```

### PR → UnifiedTask

```typescript
GitHub PR {
  number: 456
  title: "Add Button component"
  body: "Implements Button with 9 variants"
  state: "open"
  labels: [{ name: "enhancement" }]
  files: [{ filename: "Button.tsx", additions: 120 }]
}

↓ normalize()

UnifiedTask {
  id: "github_goup_goup_pr_456"
  title: "[PR] Add Button component"
  description: "Implements Button with 9 variants\n\nFiles changed: Button.tsx (+120)"
  status: "in_progress"
  labels: ["enhancement", "pull-request"]
  source: {
    type: "github"
    externalId: "pr_456"
  }
  url: "https://github.com/goup/goup/pull/456"
}
```

---

## Webhooks

### Handle Real-time Updates

```typescript
// apps/amber-saas/src/app/api/webhooks/github/route.ts

import { handleGitHubWebhook } from '@goup/lib/integrations/github/webhooks'
import { verifyGitHubSignature } from '@goup/lib/integrations/github/verify'

export async function POST(req: Request) {
  const signature = req.headers.get('x-hub-signature-256')
  const payload = await req.text()

  // Verify signature
  if (!verifyGitHubSignature(payload, signature)) {
    return Response.json({ error: 'Invalid signature' }, { status: 401 })
  }

  // Handle webhook
  await handleGitHubWebhook(JSON.parse(payload))

  return Response.json({ ok: true })
}
```

### Webhook Events

**Issue Opened:**
```json
{
  "action": "opened",
  "issue": { ... },
  "repository": { "name": "goup" }
}
```

**Issue Closed:**
```json
{
  "action": "closed",
  "issue": { ... }
}
```

**PR Merged:**
```json
{
  "action": "closed",
  "pull_request": { "merged": true, ... }
}
```

---

## Code Context (Advanced)

### Include Commit Messages

```typescript
// Sync recent commits for context
const commits = await github.getRepoCommits('goup', 'goup', {
  since: new Date('2025-01-20'),
  limit: 100
})

// Embed commit messages for RAG
const commitTasks = commits.map(commit => ({
  id: `github_goup_goup_commit_${commit.sha}`,
  title: `[Commit] ${commit.commit.message}`,
  description: commit.commit.message,
  labels: ['commit'],
  source: { type: 'github', externalId: commit.sha }
}))
```

### Include Code Diffs

```typescript
// Get PR diff for context
const pr = await github.getPR('goup', 'goup', 456)
const files = await github.getPRFiles('goup', 'goup', 456)

const diffSummary = files.map(f =>
  `${f.filename}: +${f.additions} -${f.deletions}`
).join('\n')

// Include in task description
task.description += `\n\nCode changes:\n${diffSummary}`
```

---

## Implementation Plan

### Phase 1: Basic Sync
- [ ] `client.ts` - GitHub SDK wrapper (Octokit)
- [ ] `normalizer.ts` - Issue/PR → UnifiedTask
- [ ] `sync.ts` - Sync repos
- [ ] Tests

### Phase 2: Webhooks
- [ ] `webhooks.ts` - Handle real-time updates
- [ ] `verify.ts` - Signature verification
- [ ] Update Qdrant on webhook
- [ ] Tests

### Phase 3: Advanced
- [ ] Sync commits for context
- [ ] Include code diffs in PRs
- [ ] Sync GitHub Projects v2
- [ ] Incremental sync optimization

---

## Files to Create

```
packages/amber/lib/integrations/github/
├── client.ts              # GitHub SDK wrapper (Octokit)
├── normalizer.ts          # Issue/PR → UnifiedTask
├── sync.ts                # Sync logic
├── webhooks.ts            # Webhook handler
├── verify.ts              # Signature verification
├── types.ts               # GitHub-specific types
├── client.test.ts         # Tests
└── README.md              # This file
```

---

## Example: Full Flow

```typescript
// 1. Configure GitHub integration
const github = new GitHubClient(process.env.GITHUB_TOKEN)

// 2. Initial sync
await github.syncRepos([
  { owner: 'goup', repo: 'goup' }
], {
  fullSync: true,
  syncPRs: true
})

// 3. Set up webhook (done in GitHub settings)

// 4. Real-time updates handled automatically
// Webhook → handleGitHubWebhook() → update Qdrant

// 5. Query with Amber AI
const response = await queryAmberAI({
  query: "What PRs are open?",
  sources: ['github'],
  filters: {
    labels: ['pull-request'],
    status: 'in_progress'
  }
})
```

---

## Next Steps

1. ✅ Create `client.ts` with Octokit wrapper
2. ✅ Create `normalizer.ts` for Issue/PR → UnifiedTask
3. ✅ Implement `sync.ts` for repo sync
4. ⏳ Set up webhook handler
5. ⏳ Test with real GitHub repo
