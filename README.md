# @amber-ai/ui

Premium UI Components Library - Built with shadcn/ui and Magic UI

## 🎨 Overview

@amber-ai/ui is a comprehensive React component library that provides beautiful, accessible, and customizable UI components. Built on top of Radix UI primitives and styled with Tailwind CSS, it offers a complete design system for modern web applications.

## ✨ Features

- 🎯 **67+ Components** - Complete set of UI components
- 🎨 **Beautiful Design** - Premium components with Magic UI effects
- ♿ **Accessible** - Built on Radix UI primitives
- 🎨 **Customizable** - Tailwind CSS styling with CSS variables
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **TypeScript** - Full TypeScript support
- 🧪 **Tested** - Comprehensive test coverage
- 📦 **Tree-shakable** - Optimized bundle size

## 📦 Installation

```bash
pnpm add @amber-ai/ui
```

## 🚀 Quick Start

1. **Install dependencies:**
```bash
pnpm add @amber-ai/ui tailwindcss @radix-ui/react-accordion
```

2. **Add to your Tailwind config:**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@amber-ai/ui/dist/**/*.{js,ts,jsx,tsx}",
    // ... your other content paths
  ],
  theme: {
    extend: {
      // ... your theme extensions
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // ... your other plugins
  ],
}
```

3. **Import and use components:**
```tsx
import { Button, Card, Input } from "@amber-ai/ui"

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}
```

## 📚 Components

### Basic Components
- **Button** - Various button styles and variants
- **Input** - Form input components
- **Label** - Accessible form labels
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox input component
- **Radio Group** - Radio button groups
- **Switch** - Toggle switch component
- **Slider** - Range slider component
- **Progress** - Progress indicator
- **Skeleton** - Loading skeleton components

### Layout Components
- **Card** - Container component
- **Separator** - Visual divider
- **Scroll Area** - Custom scrollable area
- **Sheet** - Slide-out panel
- **Drawer** - Mobile-friendly drawer
- **Tabs** - Tab navigation

### Overlay Components
- **Dialog** - Modal dialog
- **Popover** - Floating content
- **Tooltip** - Contextual information
- **Hover Card** - Hover-triggered content
- **Alert Dialog** - Confirmation dialogs
- **Context Menu** - Right-click menu
- **Dropdown Menu** - Action menu

### Data Display
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Accordion** - Collapsible content
- **Alert** - Notification messages

### Premium Components
- **Animated Beam** - Animated connection lines
- **Animated Gradient Text** - Gradient text animations
- **Border Beam** - Animated borders
- **Magic Card** - Interactive card effects
- **Neon Gradient Card** - Neon-styled cards
- **Particles** - Particle effects
- **Rainbow Button** - Rainbow animated button
- **Shimmer Button** - Shimmer effect button
- **Shiny Button** - Shiny animated button
- **Text Animate** - Text animation effects

## 🎨 Styling

Components use CSS variables for theming. You can customize the appearance by overriding these variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Type checking
pnpm type-check
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build library
pnpm build

# Lint code
pnpm lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Core UI components
│   └── premium/      # Premium animated components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── styles/           # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [Documentation](https://amber-ai-ui.vercel.app)
- [Storybook](https://amber-ai-ui-storybook.vercel.app)
- [GitHub](https://github.com/gtamura17/amber-ai-ui)

## 🆘 Support

For support and questions, please open an issue in the repository.