/**
 * Unified Task Schema
 *
 * All project management sources (Linear, GitHub, Jira) are normalized
 * to this schema before being embedded and stored in Qdrant.
 */
export interface UnifiedTask {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    assignee?: User;
    reporter?: User;
    labels: string[];
    project?: string;
    milestone?: string;
    source: TaskSource;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    embedding?: number[];
    lastSyncedAt: Date;
}
export type TaskStatus = 'todo' | 'in_progress' | 'done' | 'canceled';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export interface TaskSource {
    type: 'linear' | 'github' | 'jira';
    externalId: string;
    workspaceId?: string;
    repositoryId?: string;
}
export interface User {
    id: string;
    name: string;
    email?: string;
    avatar?: string;
}
/**
 * Integration Configuration
 */
export interface IntegrationConfig {
    type: 'linear' | 'github' | 'jira';
    apiKey: string;
    webhookSecret?: string;
    config: LinearConfig | GitHubConfig | JiraConfig;
}
export interface LinearConfig {
    teamIds: string[];
    projectIds?: string[];
    syncComments?: boolean;
    syncAttachments?: boolean;
}
export interface GitHubConfig {
    repos: Array<{
        owner: string;
        repo: string;
    }>;
    syncPRs?: boolean;
    syncCommits?: boolean;
    syncCodeContext?: boolean;
}
export interface JiraConfig {
    domain: string;
    projectKeys: string[];
    syncSprints?: boolean;
    syncEpics?: boolean;
}
/**
 * Webhook Payloads
 */
export interface LinearWebhookPayload {
    action: 'create' | 'update' | 'delete';
    type: 'Issue' | 'Comment' | 'Project';
    data: any;
    createdAt: string;
}
export interface GitHubWebhookPayload {
    action: 'opened' | 'closed' | 'edited' | 'deleted';
    issue?: any;
    pull_request?: any;
    comment?: any;
    repository: {
        name: string;
        owner: {
            login: string;
        };
    };
}
/**
 * Sync Options
 */
export interface SyncOptions {
    fullSync?: boolean;
    since?: Date;
    limit?: number;
    includeComments?: boolean;
    includeAttachments?: boolean;
}
/**
 * Query Options
 */
export interface QueryOptions {
    sources?: Array<'linear' | 'github' | 'jira'>;
    status?: TaskStatus[];
    priority?: TaskPriority[];
    labels?: string[];
    assignee?: string;
    project?: string;
    dateRange?: {
        from: Date;
        to: Date;
    };
    limit?: number;
}
/**
 * Normalizer Interface
 */
export interface TaskNormalizer<T> {
    normalize(item: T): UnifiedTask;
    denormalize?(task: UnifiedTask): T;
}
//# sourceMappingURL=types.d.ts.map