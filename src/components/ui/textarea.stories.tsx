import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { Label } from './label';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <Textarea placeholder="Type your message here..." />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-full">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <Textarea
      defaultValue="This is a pre-filled textarea with some content that the user can edit."
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea placeholder="Disabled textarea" disabled />
  ),
};

export const LongContent: Story = {
  render: () => (
    <Textarea
      className="min-h-[200px]"
      defaultValue={`This is a long textarea with multiple lines of content.

You can type as much as you want here, and it will expand vertically to accommodate the content.

Perfect for forms, comments, or any multi-line text input.`}
    />
  ),
};

export const WithRows: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Small (3 rows)</Label>
      <Textarea rows={3} placeholder="Type here..." />
      <Label>Large (8 rows)</Label>
      <Textarea rows={8} placeholder="Type here..." />
    </div>
  ),
};

