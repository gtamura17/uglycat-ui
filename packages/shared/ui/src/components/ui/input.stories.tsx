import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="name@example.com" type="email" />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'john.doe@example.com',
    placeholder: 'Enter your email',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input placeholder="Default size" />
      <Input className="h-12 text-base" placeholder="Large size" />
      <Input className="h-8 text-xs" placeholder="Small size" />
    </div>
  ),
};

