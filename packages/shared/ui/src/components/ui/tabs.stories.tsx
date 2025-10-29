import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-96">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        General settings for your account.
      </TabsContent>
      <TabsContent value="security">
        Security and privacy settings.
      </TabsContent>
      <TabsContent value="advanced">
        Advanced configuration options.
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="rounded-lg border p-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-sm text-muted-foreground">
          Get a complete overview of your metrics.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="rounded-lg border p-4">
        <h3 className="text-lg font-semibold mb-2">Analytics</h3>
        <p className="text-sm text-muted-foreground">
          Detailed analytics and insights.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="rounded-lg border p-4">
        <h3 className="text-lg font-semibold mb-2">Reports</h3>
        <p className="text-sm text-muted-foreground">
          Generate and download reports.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="first" className="w-96">
      <TabsList>
        <TabsTrigger value="first">First</TabsTrigger>
        <TabsTrigger value="second">Second</TabsTrigger>
        <TabsTrigger value="third" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="first">First tab content.</TabsContent>
      <TabsContent value="second">Second tab content.</TabsContent>
      <TabsContent value="third">This tab is disabled.</TabsContent>
    </Tabs>
  ),
};

export const Compact: Story = {
  render: () => (
    <Tabs defaultValue="one" className="w-64">
      <TabsList className="h-8">
        <TabsTrigger value="one" className="text-xs px-2 py-1">One</TabsTrigger>
        <TabsTrigger value="two" className="text-xs px-2 py-1">Two</TabsTrigger>
        <TabsTrigger value="three" className="text-xs px-2 py-1">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one" className="text-sm">Compact content.</TabsContent>
      <TabsContent value="two" className="text-sm">Compact content.</TabsContent>
      <TabsContent value="three" className="text-sm">Compact content.</TabsContent>
    </Tabs>
  ),
};

