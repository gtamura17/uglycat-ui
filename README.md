<div align="center">
  <img src="https://raw.githubusercontent.com/gtamura17/uglycat-ui/master/.github/logo.png" alt="UglyCat UI" width="200"/>

  <h1>@uglycat/ui</h1>
  <p>Beautiful components from an ugly cat ⚡️</p>

  <p>
    <a href="https://www.npmjs.com/package/@uglycat/ui">
      <img src="https://img.shields.io/npm/v/@uglycat/ui.svg?style=flat&colorA=000000&colorB=000000" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/package/@uglycat/ui">
      <img src="https://img.shields.io/npm/dm/@uglycat/ui.svg?style=flat&colorA=000000&colorB=000000" alt="npm downloads" />
    </a>
    <a href="https://github.com/gtamura17/uglycat-ui/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-000000.svg?style=flat&colorA=000000&colorB=000000" alt="MIT License" />
    </a>
    <a href="https://github.com/gtamura17/uglycat-ui">
      <img src="https://img.shields.io/github/stars/gtamura17/uglycat-ui?style=flat&colorA=000000&colorB=000000" alt="GitHub stars" />
    </a>
  </p>
</div>

## Overview

A premium React component library built on Radix UI primitives and styled with Tailwind CSS. @uglycat/ui provides accessible, customizable, and production-ready components for modern web applications.

## Documentation

For full documentation, visit [uglycat-ui docs](https://github.com/gtamura17/uglycat-ui).

## Installation

```bash
# npm
npm install @uglycat/ui

# yarn
yarn add @uglycat/ui

# pnpm
pnpm add @uglycat/ui
```

## Usage

```tsx
import { Button, Card, Input } from "@uglycat/ui"
import "@uglycat/ui/styles"

export function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}
```

Configure Tailwind CSS:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@uglycat/ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
}
```

## Features

- 🎯 **67+ Components** - Complete set of production-ready UI components
- ♿ **Accessible** - Built on Radix UI primitives with ARIA support
- 🎨 **Customizable** - Tailwind CSS with CSS variables theming
- 📦 **Tree-shakable** - Optimized bundle size with ESM support
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 📱 **Responsive** - Mobile-first design approach

## Components

**Basic Components**: Button, Input, Label, Textarea, Checkbox, Radio Group, Switch, Slider, Progress, Skeleton

**Layout Components**: Card, Separator, Scroll Area, Sheet, Drawer, Tabs

**Overlay Components**: Dialog, Popover, Tooltip, Hover Card, Alert Dialog, Context Menu, Dropdown Menu

**Premium Components**: Animated Beam, Animated Gradient Text, Border Beam, Magic Card, Neon Gradient Card, Particles, Rainbow Button, Shimmer Button, Shiny Button, Text Animate

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) first.

## License

MIT © [Gabriel Tamura](https://github.com/gtamura17)

---

<div align="center">
  <p>
    <a href="https://www.gtamura.com/pt-BR">website</a> (onde construo sobre eu)
    ·
    <a href="https://github.com/gtamura17">github</a> (onde construo umas coisa)
    ·
    <a href="https://www.linkedin.com/in/gabriel-tamura-mamiya">linkedin</a> (onde falo umas coisa mais formal pq preciso)
  </p>
  <p>Built with ❤️ by an ugly cat</p>
</div>
