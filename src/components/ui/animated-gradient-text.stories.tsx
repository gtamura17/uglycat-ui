import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedGradientText } from './animated-gradient-text';

const meta: Meta<typeof AnimatedGradientText> = {
  title: 'Components/Premium/AnimatedGradientText',
  component: AnimatedGradientText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedGradientText>;

export const Default: Story = {
  args: {
    children: 'Animated Gradient Text',
  },
};

export const Welcome: Story = {
  args: {
    children: 'Welcome to Amber AI',
  },
};

export const Hero: Story = {
  args: {
    children: 'Build Amazing UIs',
  },
};

export const CallToAction: Story = {
  args: {
    children: 'Get Started Today',
  },
};

export const Feature: Story = {
  args: {
    children: 'Premium Components',
  },
};

export const MultipleTexts: Story = {
  render: () => (
    <div className="space-y-4">
      <AnimatedGradientText className="text-4xl font-bold">
        Amazing Features
      </AnimatedGradientText>
      <AnimatedGradientText className="text-2xl font-semibold">
        Premium Quality
      </AnimatedGradientText>
      <AnimatedGradientText className="text-lg">
        Beautiful Design
      </AnimatedGradientText>
    </div>
  ),
};

export const InHero: Story = {
  render: () => (
    <div className="text-center py-20 bg-gradient-to-b from-background to-muted">
      <AnimatedGradientText className="text-6xl font-bold mb-4">
        Amber AI UI
      </AnimatedGradientText>
      <p className="text-xl text-muted-foreground mb-8">
        Premium React components with beautiful animations
      </p>
      <AnimatedGradientText className="text-lg">
        Start building today
      </AnimatedGradientText>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <AnimatedGradientText className="text-xs">Extra Small</AnimatedGradientText>
      <AnimatedGradientText className="text-sm">Small</AnimatedGradientText>
      <AnimatedGradientText className="text-base">Base</AnimatedGradientText>
      <AnimatedGradientText className="text-lg">Large</AnimatedGradientText>
      <AnimatedGradientText className="text-xl">Extra Large</AnimatedGradientText>
      <AnimatedGradientText className="text-2xl">2XL</AnimatedGradientText>
      <AnimatedGradientText className="text-3xl">3XL</AnimatedGradientText>
      <AnimatedGradientText className="text-4xl">4XL</AnimatedGradientText>
    </div>
  ),
};
