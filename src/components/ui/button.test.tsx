import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, buttonVariants } from './button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Default Button')
  })

  it('renders gradient variant', () => {
    render(<Button variant="gradient">Premium Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gradient-to-r')
  })

  it('renders glass variant', () => {
    render(<Button variant="glass">Glass Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('backdrop-blur-xl')
  })

  it('renders glow variant', () => {
    render(<Button variant="glow">Glow Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveAttribute('data-loading', 'true')
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-8')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-10')
  })
})


