# @uglycat/ui

Beautiful components from an ugly cat - Premium React UI library

## 🎨 Overview

@uglycat/ui is a carefully crafted React component library built on Radix UI primitives and styled with Tailwind CSS. It provides accessible, customizable, and production-ready components for modern web applications.

## ✨ Features

- 🎯 **67+ Components** - Complete set of production-ready UI components
- 🎨 **Beautiful Design** - Premium components with modern aesthetics
- ♿ **Accessible** - Built on Radix UI primitives with ARIA support
- 🎨 **Customizable** - Tailwind CSS with CSS variables theming
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 🧪 **Tested** - Comprehensive test coverage with Vitest
- 📦 **Tree-shakable** - Optimized bundle size with ESM support

## 📦 Installation

```bash
pnpm add @uglycat/ui
# or
npm install @uglycat/ui
# or
yarn add @uglycat/ui
```

## 🚀 Quick Start

1. **Install dependencies:**
```bash
pnpm add @uglycat/ui tailwindcss
```

2. **Configure Tailwind CSS:**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@uglycat/ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
```

3. **Import styles in your app:**
```tsx
import "@uglycat/ui/styles"
```

4. **Use components:**
```tsx
import { Button, Card, Input } from "@uglycat/ui"

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

## 🎨 Theming

Components use CSS variables for theming. Customize by overriding variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

## 🧪 Development

```bash
# Install dependencies
pnpm install

# Build library
pnpm build

# Run tests
pnpm test

# Type checking
pnpm type-check

# Lint
pnpm lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Core UI components (shadcn/ui)
│   └── premium/      # Premium animated components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── styles/           # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with tests
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/gtamura17/uglycat-ui)
- [Report Issues](https://github.com/gtamura17/uglycat-ui/issues)

## 👨‍💻 Author

**Gabriel Tamura**
- GitHub: [@gtamura17](https://github.com/gtamura17)

---

Built with ❤️ by an ugly cat
