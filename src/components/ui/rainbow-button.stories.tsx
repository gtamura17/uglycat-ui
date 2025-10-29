import type { Meta, StoryObj } from '@storybook/react';
import { RainbowButton } from './rainbow-button';

const meta: Meta<typeof RainbowButton> = {
  title: 'Components/Premium/RainbowButton',
  component: RainbowButton,
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
type Story = StoryObj<typeof RainbowButton>;

export const Default: Story = {
  args: {
    children: 'Rainbow Button',
  },
};

export const CustomText: Story = {
  args: {
    children: 'Click Me!',
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a longer button text',
  },
};

export const WithEmoji: Story = {
  args: {
    children: '🌈 Rainbow Magic ✨',
  },
};

export const GradientText: Story = {
  args: {
    children: 'Gradient Text Effect',
  },
};

export const CallToAction: Story = {
  args: {
    children: 'Get Started Now',
  },
};

export const MultipleButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RainbowButton>Primary Action</RainbowButton>
      <RainbowButton>Secondary Action</RainbowButton>
      <RainbowButton>Learn More</RainbowButton>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="text-lg font-semibold mb-2">Premium Feature</h3>
      <p className="text-muted-foreground mb-4">
        Unlock all premium features with our rainbow button.
      </p>
      <RainbowButton>Upgrade Now</RainbowButton>
    </div>
  ),
};
