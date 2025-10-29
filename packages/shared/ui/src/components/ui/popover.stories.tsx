import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="w-64" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="w-64" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">View Options</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-4">
          <h4 className="font-medium leading-none">View options</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="grid" defaultChecked />
              <label htmlFor="grid">Show grid</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="guides" defaultChecked />
              <label htmlFor="guides">Show guides</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="snap" />
              <label htmlFor="snap">Snap to grid</label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

