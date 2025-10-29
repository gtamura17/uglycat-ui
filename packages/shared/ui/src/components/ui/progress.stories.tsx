import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 33,
  },
};

export const Zero: Story = {
  args: {
    value: 0,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};

export const Small: Story = {
  args: {
    value: 33,
    className: 'h-2',
  },
};

export const Large: Story = {
  args: {
    value: 33,
    className: 'h-6',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Upload progress</span>
        <span>33%</span>
      </div>
      <Progress value={33} />
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 1 of 4</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 2 of 4</span>
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 3 of 4</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Completed</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

