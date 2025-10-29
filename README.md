# @amber/ui

> Design System based on Shadcn/ui + Radix UI

## 🎨 Design System

**Dark premium theme** inspired by gtamura.com:
- Background: `#0a0a0a`
- Accents: Cyan (`#22d3ee`), Purple (`#9C7DFF`)
- Typography: Inter (sans-serif)
- Tone: Professional enterprise (not cartoon/futuristic)

---

## 🚀 Quick Start

### Import Components

```tsx
import { 
  Button, 
  Card, 
  CardCompound,
  Input, 
  Dialog, 
  DialogCompound,
  ShimmerButton,
  MagicCard 
} from '@amber/ui'
```

### Basic Usage

```tsx
export function MyComponent() {
  return (
    <CardCompound.Root variant="glass">
      <CardCompound.Header>
        <CardCompound.Title>Premium Card</CardCompound.Title>
      </CardCompound.Header>
      <CardCompound.Content>
        <Input placeholder="Enter text" />
        <Button variant="gradient" size="lg">Submit</Button>
      </CardCompound.Content>
    </CardCompound.Root>
  )
}
```

### Premium Variants

```tsx
// Button with loading state
<Button variant="glow" loading>Processing...</Button>

// Card with glass effect
<CardCompound.Root variant="glass">
  <CardCompound.Header>
    <CardCompound.Title>Glass Card</CardCompound.Title>
  </CardCompound.Header>
</CardCompound.Root>

// Magic UI Components
<ShimmerButton>Premium Button</ShimmerButton>
<MagicCard>Interactive Magic</MagicCard>
```

---

## 📦 Components (37+)

### Shadcn Base (18 componentes)
- Button (8 variants: default, gradient, glass, glow, + loading)
- Input, Textarea, Label
- Checkbox, Radio Group, Switch, Slider
- Select, Badge, Avatar, Separator
- **Skeleton** (Loading placeholder)
- **Progress** (Linear & circular)
- **Hover Card** (Rich tooltip)
- **Scroll Area** (Custom scrollbar)
- **Form** (React Hook Form integration)
- Tooltip

### Magic UI Premium (10 componentes)
- **ShimmerButton** - Animated shimmer effect
- **RainbowButton** - Animated rainbow gradient
- **ShinyButton** - Shiny hover effect
- **MagicCard** - Interactive card with glow
- **BorderBeam** - Animated border beam
- **NeonGradientCard** - Neon gradient effects
- **AnimatedGradientText** - Gradient text animation
- **TextAnimate** - Text animation effects
- **Particles** - Particle background
- **AnimatedBeam** - Animated beam connections

### Tier 2 Composition (9 componentes)
- Dialog, Drawer, Sheet
- Dropdown Menu, Context Menu
- Tabs, Accordion, Popover
- Alert

### Layout
- Card
- Separator
- Scroll Area
- Aspect Ratio

### Forms
- Input
- Textarea
- Select
- Checkbox
- Radio Group
- Switch
- Slider
- Form (React Hook Form integration)

### Buttons
- Button
- Toggle
- Toggle Group

### Overlay
- Dialog
- Alert Dialog
- Sheet
- Popover
- Dropdown Menu
- Context Menu
- Tooltip
- Hover Card

### Feedback
- Alert
- Toast
- Badge
- Progress
- Skeleton

### Navigation
- Tabs
- Navigation Menu
- Breadcrumb
- Pagination

### Display
- Avatar
- Table
- Accordion
- Collapsible

---

## 🎨 Customization

### Theme

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#eaeaea',
        primary: {
          DEFAULT: '#22d3ee',
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#9C7DFF',
          foreground: '#ffffff',
        },
      },
    },
  },
}
```

### CSS Variables

```css
:root {
  --background: 0 0% 4%;
  --foreground: 0 0% 92%;
  --primary: 186 82% 53%;
  --secondary: 258 83% 73%;
}
```

---

## ♿ Accessibility

All components follow **WAI-ARIA** standards:
- Keyboard navigation
- Screen reader support
- Focus management
- ARIA attributes

**Color contrast:** Minimum 4.5:1 ratio
**Touch targets:** Minimum 44px

---

## 📱 Responsive Design

**Mobile-first approach:**
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fluid typography
- Touch-friendly targets

---

## 🚀 Performance

- **Tree-shaking:** Only import what you use
- **Code splitting:** Components load on-demand
- **Bundle size:** ~97KB (minified, ESM)

### Actual Bundle Size
- ESM: 87KB
- CJS: 96.50KB
- CSS: 5.01KB
- Types: 34KB

---

## 🛠️ Development

### Adding Components

```bash
# Use Shadcn CLI
npx shadcn@latest add button
```

### Custom Component

```tsx
// src/components/custom-button.tsx
import { Button } from './button'
import { cva, type VariantProps } from 'class-variance-authority'

const customButtonVariants = cva(
  'base-styles',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
      },
    },
  }
)

export interface CustomButtonProps extends VariantProps<typeof customButtonVariants> {}

export function CustomButton({ variant, ...props }: CustomButtonProps) {
  return <Button className={customButtonVariants({ variant })} {...props} />
}
```

---

## 📚 Links

- [Shadcn/ui Docs](https://ui.shadcn.com)
- [Radix UI Docs](https://radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)
