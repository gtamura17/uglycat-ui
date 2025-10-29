import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { Button } from './button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithText: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Info</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip with information text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">New</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Create new document</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Share</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share document</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete document</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

