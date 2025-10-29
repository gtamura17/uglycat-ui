// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'array',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const WithValue: Story = {
  args: {
    value: [30],
    max: 100,
    step: 1,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
    max: 100,
    step: 1,
  },
};

export const WithSteps: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Volume</span>
          <span>50%</span>
        </div>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Brightness</span>
          <span>75%</span>
        </div>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
  },
};

export const WithMinMax: Story = {
  args: {
    defaultValue: [0],
    min: 0,
    max: 10,
    step: 1,
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
    step: 5,
  },
};

