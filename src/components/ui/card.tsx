import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const cardVariants = cva("rounded-xl border text-card-foreground shadow", {
  variants: {
    variant: {
      default: "bg-card",
      glass: "bg-glass-bg backdrop-blur-xl border-glass-border shadow-lg",
      elevated: "bg-card shadow-lg hover:shadow-xl transition-shadow",
      gradient: "bg-gradient-to-br from-card to-muted border-primary/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

// Context para compartilhar variant entre subcomponents
const CardContext = React.createContext<{ variant?: "default" | "glass" | "elevated" | "gradient" }>({})

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  ({ className, variant, ...props }, ref) => (
  <CardContext.Provider value={{ variant: variant || "default" }}>
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  </CardContext.Provider>
))
CardRoot.displayName = "Card.Root"

// Shorthand export (também funciona como antes)
const Card = CardRoot
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardHeaderAlias = CardHeader
const CardTitleAlias = CardTitle
const CardDescriptionAlias = CardDescription
const CardContentAlias = CardContent
const CardFooterAlias = CardFooter

// Compound export pattern
export const CardCompound = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
})

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
