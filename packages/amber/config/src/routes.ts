// Application routes configuration

export const ROUTES = {
  // Public
  HOME: '/',
  PRICING: '/pricing',
  DOCS: '/docs',
  
  // Auth
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  
  // Dashboard
  DASHBOARD: '/dashboard',
  INSTALLATIONS: '/dashboard/installations',
  INSTALLATION_NEW: '/dashboard/installations/new',
  INSTALLATION_DETAIL: (id: string) => `/dashboard/installations/${id}`,
  BILLING: '/dashboard/billing',
  SETTINGS: '/dashboard/settings',
  
  // API
  API_CHAT: (installationId: string) => `/api/chat/${installationId}`,
  API_INSTALLATION_CONFIG: (installationId: string) => `/api/installations/${installationId}/config`,
  API_EMBED: (installationId: string) => `/api/embed/${installationId}.js`,
  
  // Webhooks
  WEBHOOK_STRIPE: '/api/webhooks/stripe',
  WEBHOOK_CLERK: '/api/webhooks/clerk',
} as const
