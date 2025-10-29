import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Middle</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="p-4 hover:bg-accent rounded">
        <div className="font-medium">Item 1</div>
        <p className="text-sm text-muted-foreground">Description</p>
      </div>
      <Separator />
      <div className="p-4 hover:bg-accent rounded">
        <div className="font-medium">Item 2</div>
        <p className="text-sm text-muted-foreground">Description</p>
      </div>
      <Separator />
      <div className="p-4 hover:bg-accent rounded">
        <div className="font-medium">Item 3</div>
        <p className="text-sm text-muted-foreground">Description</p>
      </div>
    </div>
  ),
};

