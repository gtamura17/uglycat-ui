import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Item selected</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">Disabled checkbox</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" checked disabled />
      <Label htmlFor="disabled-checked">Checked and disabled</Label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="item1" />
        <Label htmlFor="item1">Item 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="item2" />
        <Label htmlFor="item2">Item 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="item3" />
        <Label htmlFor="item3">Item 3</Label>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <Checkbox id="description" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="description">Newsletter</Label>
          <p className="text-sm text-muted-foreground">
            Receive updates about new features and products
          </p>
        </div>
      </div>
    </div>
  ),
};

