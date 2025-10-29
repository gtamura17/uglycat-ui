import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './scroll-area';
import { Separator } from './separator';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full rounded-md border p-4">
      <div className="space-y-4">
        <div className="text-lg font-semibold">Tags</div>
        <Separator />
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="inline-block rounded-md border p-2">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithContent: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Scrollable Content</h3>
        <p className="text-sm text-muted-foreground">
          This is a scrollable area with a long content. You can scroll
          through the items below.
        </p>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <div>
              <div className="font-medium">User {i + 1}</div>
              <div className="text-sm text-muted-foreground">
                Description for user {i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

