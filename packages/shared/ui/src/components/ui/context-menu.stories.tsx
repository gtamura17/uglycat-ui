import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from './context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="rounded-lg border p-8">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem disabled>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Select All</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const InCard: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="rounded-lg border p-8 w-full max-w-md">
        <div className="space-y-2">
          <div className="font-semibold">Right-click me</div>
          <div className="text-sm text-muted-foreground">
            Use right click to open context menu
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>View Details</ContextMenuItem>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="rounded-lg border p-8">
        Right click for options
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>New Tab</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy Link</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">
          Remove
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

