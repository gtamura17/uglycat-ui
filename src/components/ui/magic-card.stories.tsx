import type { Meta, StoryObj } from '@storybook/react';
import { MagicCard } from './magic-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { Button } from './button';

const meta: Meta<typeof MagicCard> = {
  title: 'Components/Premium/MagicCard',
  component: MagicCard,
  tags: ['autodocs'],
  argTypes: {
    gradientSize: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
    },
    gradientColor: {
      control: 'color',
    },
    gradientOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    gradientFrom: {
      control: 'color',
    },
    gradientTo: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MagicCard>;

export const Default: Story = {
  render: () => (
    <MagicCard>
      <Card>
        <CardHeader>
          <CardTitle>Magic Card</CardTitle>
          <CardDescription>Move your mouse over the card to see the magic!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has an interactive gradient that follows your mouse cursor.</p>
        </CardContent>
      </Card>
    </MagicCard>
  ),
};

export const CustomColors: Story = {
  args: {
    gradientFrom: '#ff6b6b',
    gradientTo: '#4ecdc4',
    gradientColor: '#2c3e50',
  },
  render: (args) => (
    <MagicCard {...args}>
      <Card>
        <CardHeader>
          <CardTitle>Custom Colors</CardTitle>
          <CardDescription>Red to teal gradient effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Custom gradient colors create unique visual effects.</p>
        </CardContent>
      </Card>
    </MagicCard>
  ),
};

export const LargeGradient: Story = {
  args: {
    gradientSize: 300,
  },
  render: (args) => (
    <MagicCard {...args}>
      <Card>
        <CardHeader>
          <CardTitle>Large Gradient</CardTitle>
          <CardDescription>Bigger gradient effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A larger gradient creates a more dramatic effect.</p>
        </CardContent>
      </Card>
    </MagicCard>
  ),
};

export const SmallGradient: Story = {
  args: {
    gradientSize: 100,
  },
  render: (args) => (
    <MagicCard {...args}>
      <Card>
        <CardHeader>
          <CardTitle>Small Gradient</CardTitle>
          <CardDescription>Subtle gradient effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A smaller gradient creates a more subtle effect.</p>
        </CardContent>
      </Card>
    </MagicCard>
  ),
};

export const HighOpacity: Story = {
  args: {
    gradientOpacity: 0.9,
  },
  render: (args) => (
    <MagicCard {...args}>
      <Card>
        <CardHeader>
          <CardTitle>High Opacity</CardTitle>
          <CardDescription>More visible gradient</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Higher opacity makes the gradient more prominent.</p>
        </CardContent>
      </Card>
    </MagicCard>
  ),
};

export const WithButton: Story = {
  render: () => (
    <MagicCard>
      <Card>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Card with interactive elements</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card contains interactive elements that work with the magic effect.</p>
        </CardContent>
        <div className="p-6 pt-0">
          <Button variant="gradient">Hover Me</Button>
        </div>
      </Card>
    </MagicCard>
  ),
};

export const PurpleTheme: Story = {
  args: {
    gradientFrom: '#9333ea',
    gradientTo: '#c084fc',
    gradientColor: '#581c87',
  },
  render: (args) => (
    <MagicCard {...args}>
      <Card>
        <CardHeader>
          <CardTitle>Purple Magic</CardTitle>
          <CardDescription>Purple gradient theme</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A beautiful purple gradient effect.</p>
        </CardContent>
      </Card>
    </MagicCard>
  ),
};
