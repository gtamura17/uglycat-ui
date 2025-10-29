import type { Meta, StoryObj } from '@storybook/react';
import { Particles } from './particles';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

const meta: Meta<typeof Particles> = {
  title: 'Components/Premium/Particles',
  component: Particles,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Particles>;

export const Default: Story = {
  render: () => (
    <div className="relative h-96 w-full overflow-hidden rounded-lg border">
      <Particles />
      <div className="absolute inset-0 flex items-center justify-center">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Particles Background</CardTitle>
            <CardDescription>Floating particles effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card sits on top of animated particles.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const HeroSection: Story = {
  render: () => (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background to-muted">
      <Particles />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Amber AI UI</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Premium components with particle effects
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  ),
};

export const CardOverlay: Story = {
  render: () => (
    <div className="relative h-80 w-full overflow-hidden rounded-lg border">
      <Particles />
      <div className="absolute inset-0 p-6">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>With particle background</CardDescription>
          </CardHeader>
          <CardContent>
            <p>The particles create a dynamic background effect.</p>
            <div className="mt-4 space-y-2">
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                Action 1
              </button>
              <button className="w-full px-4 py-2 border border-border rounded hover:bg-accent">
                Action 2
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const MultipleContainers: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative h-64 w-full overflow-hidden rounded-lg border">
        <Particles />
        <div className="absolute inset-0 flex items-center justify-center">
          <Card className="p-4">
            <CardTitle>Container 1</CardTitle>
            <p>First particle container</p>
          </Card>
        </div>
      </div>
      <div className="relative h-64 w-full overflow-hidden rounded-lg border">
        <Particles />
        <div className="absolute inset-0 flex items-center justify-center">
          <Card className="p-4">
            <CardTitle>Container 2</CardTitle>
            <p>Second particle container</p>
          </Card>
        </div>
      </div>
    </div>
  ),
};

export const SmallContainer: Story = {
  render: () => (
    <div className="relative h-32 w-64 overflow-hidden rounded-lg border">
      <Particles />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="font-semibold">Small</h3>
          <p className="text-sm text-muted-foreground">Compact particles</p>
        </div>
      </div>
    </div>
  ),
};

export const LargeContainer: Story = {
  render: () => (
    <div className="relative h-96 w-full overflow-hidden rounded-lg border">
      <Particles />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">Large Container</h2>
          <p className="text-lg text-muted-foreground">More space for particles</p>
        </div>
      </div>
    </div>
  ),
};
