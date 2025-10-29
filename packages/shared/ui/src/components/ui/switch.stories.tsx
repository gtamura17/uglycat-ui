import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Label } from './label';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked" defaultChecked />
      <Label htmlFor="checked">Notifications</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled">Disabled</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked" checked disabled />
      <Label htmlFor="disabled-checked">Disabled and checked</Label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="email">Email notifications</Label>
        <Switch id="email" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="push">Push notifications</Label>
        <Switch id="push" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="sms">SMS notifications</Label>
        <Switch id="sms" />
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="auto-save">Auto-save</Label>
        <p className="text-sm text-muted-foreground">
          Automatically save your changes
        </p>
      </div>
      <Switch id="auto-save" />
    </div>
  ),
};

