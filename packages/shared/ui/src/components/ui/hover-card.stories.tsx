import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Button } from './button';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@username</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@username</h4>
          <p className="text-sm text-muted-foreground">
            Full-stack developer and open source enthusiast.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">shadcn</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">
              Creator of shadcn/ui
            </p>
            <div className="flex items-center pt-2 text-xs text-muted-foreground">
              <span className="font-medium">Joined</span>
              <span className="mx-1">•</span>
              <span>2023</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Learn more</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Useful Information</h4>
          <p className="text-sm text-muted-foreground">
            This component displays additional information when you hover over the trigger.
            It's perfect for tooltips and detailed descriptions.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

