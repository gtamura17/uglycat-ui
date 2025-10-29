import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from './input';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Email</Label>,
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Optional: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Label htmlFor="name">
        Full Name <span className="text-muted-foreground">(optional)</span>
      </Label>
      <Input id="name" placeholder="John Doe" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Label htmlFor="email">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input id="email" type="email" placeholder="required" required />
    </div>
  ),
};

