import type { Meta, StoryObj } from '@storybook/react';
import { ShimmerButton } from './shimmer-button';

const meta: Meta<typeof ShimmerButton> = {
  title: 'Components/Premium/ShimmerButton',
  component: ShimmerButton,
  tags: ['autodocs'],
  argTypes: {
    shimmerColor: {
      control: 'color',
    },
    shimmerSize: {
      control: 'text',
    },
    shimmerDuration: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    background: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShimmerButton>;

export const Default: Story = {
  args: {
    children: 'Shimmer Button',
  },
};

export const CustomColor: Story = {
  args: {
    shimmerColor: '#06b6d4',
    children: 'Cyan Shimmer',
  },
};

export const PurpleShimmer: Story = {
  args: {
    shimmerColor: '#9333ea',
    children: 'Purple Shimmer',
  },
};

export const FastShimmer: Story = {
  args: {
    shimmerDuration: '1s',
    children: 'Fast Shimmer',
  },
};

export const SlowShimmer: Story = {
  args: {
    shimmerDuration: '5s',
    children: 'Slow Shimmer',
  },
};

export const Rounded: Story = {
  args: {
    borderRadius: '8px',
    children: 'Rounded Button',
  },
};

export const Sharp: Story = {
  args: {
    borderRadius: '0px',
    children: 'Sharp Edges',
  },
};

export const LargeShimmer: Story = {
  args: {
    shimmerSize: '0.1em',
    children: 'Large Shimmer',
  },
};

