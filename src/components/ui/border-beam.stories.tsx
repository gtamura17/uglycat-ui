import type { Meta, StoryObj } from '@storybook/react';
import { BorderBeam } from './border-beam';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

const meta: Meta<typeof BorderBeam> = {
  title: 'Components/Premium/BorderBeam',
  component: BorderBeam,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
    },
    duration: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
    },
    borderWidth: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    colorFrom: {
      control: 'color',
    },
    colorTo: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BorderBeam>;

export const Default: Story = {
  render: () => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Border Beam</CardTitle>
          <CardDescription>Animated border effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has an animated border beam effect.</p>
        </CardContent>
      </Card>
      <BorderBeam />
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    size: 200,
  },
  render: (args) => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Custom Size</CardTitle>
          <CardDescription>Larger beam effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A larger beam creates a more dramatic effect.</p>
        </CardContent>
      </Card>
      <BorderBeam {...args} />
    </div>
  ),
};

export const FastAnimation: Story = {
  args: {
    duration: 2,
  },
  render: (args) => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Fast Animation</CardTitle>
          <CardDescription>Quick beam animation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Faster animation creates more dynamic movement.</p>
        </CardContent>
      </Card>
      <BorderBeam {...args} />
    </div>
  ),
};

export const SlowAnimation: Story = {
  args: {
    duration: 8,
  },
  render: (args) => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Slow Animation</CardTitle>
          <CardDescription>Gentle beam animation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Slower animation creates a more subtle effect.</p>
        </CardContent>
      </Card>
      <BorderBeam {...args} />
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    colorFrom: '#ff6b6b',
    colorTo: '#4ecdc4',
  },
  render: (args) => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Custom Colors</CardTitle>
          <CardDescription>Red to teal beam</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Custom colors create unique visual effects.</p>
        </CardContent>
      </Card>
      <BorderBeam {...args} />
    </div>
  ),
};

export const ThickBorder: Story = {
  args: {
    borderWidth: 5,
  },
  render: (args) => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Thick Border</CardTitle>
          <CardDescription>Thicker beam effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A thicker border creates more visual impact.</p>
        </CardContent>
      </Card>
      <BorderBeam {...args} />
    </div>
  ),
};

export const PurpleTheme: Story = {
  args: {
    colorFrom: '#9333ea',
    colorTo: '#c084fc',
    size: 150,
    duration: 3,
  },
  render: (args) => (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Purple Beam</CardTitle>
          <CardDescription>Purple gradient beam</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A beautiful purple gradient beam effect.</p>
        </CardContent>
      </Card>
      <BorderBeam {...args} />
    </div>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative">
        <Card className="p-4">
          <CardTitle>Card 1</CardTitle>
          <p>First card with beam</p>
        </Card>
        <BorderBeam size={100} duration={2} />
      </div>
      <div className="relative">
        <Card className="p-4">
          <CardTitle>Card 2</CardTitle>
          <p>Second card with beam</p>
        </Card>
        <BorderBeam size={120} duration={4} colorFrom="#4ecdc4" colorTo="#ff6b6b" />
      </div>
    </div>
  ),
};
