// Application constants

export const APP_NAME = 'Amber AI'
export const APP_DESCRIPTION = 'White-label AI chat for digital agencies'

export const WIDGET_POSITIONS = [
  { value: 'bottom-right', label: 'Bottom Right' },
  { value: 'bottom-left', label: 'Bottom Left' },
  { value: 'top-right', label: 'Top Right' },
  { value: 'top-left', label: 'Top Left' },
] as const

export const DEFAULT_ACCENT_COLOR = '#22d3ee'
export const DEFAULT_ASSISTANT_NAME = 'Amber AI'

// Rate limiting
export const RATE_LIMIT_MESSAGES_PER_MINUTE = 10
export const RATE_LIMIT_REQUESTS_PER_HOUR = 100

// Usage
export const USAGE_ALERT_THRESHOLD = 0.8 // 80% of limit

// Costs (for internal calculations)
export const COST_PER_MESSAGE = 0.01 // $0.01/message
