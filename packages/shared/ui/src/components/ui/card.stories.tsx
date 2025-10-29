// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
import { Button } from './button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'elevated', 'gradient'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Glass: Story = {
  render: () => (
    <Card variant="glass">
      <CardHeader>
        <CardTitle>Glass Card</CardTitle>
        <CardDescription>Premium glass effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a glass effect with backdrop blur.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>Enhanced shadows</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has elevated shadows that increase on hover.</p>
      </CardContent>
    </Card>
  ),
};

export const Gradient: Story = {
  render: () => (
    <Card variant="gradient">
      <CardHeader>
        <CardTitle>Gradient Card</CardTitle>
        <CardDescription>Beautiful gradient background</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a gradient background.</p>
      </CardContent>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>No Footer</CardTitle>
        <CardDescription>Card without footer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has no footer.</p>
      </CardContent>
    </Card>
  ),
};

export const CompoundPattern: Story = {
  render: () => (
    <Card.Root variant="glass">
      <Card.Header>
        <Card.Title>Compound Pattern</Card.Title>
        <Card.Description>Using dot notation</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>You can also use Card.Root, Card.Header, etc.</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="gradient">Learn More</Button>
      </Card.Footer>
    </Card.Root>
  ),
};

