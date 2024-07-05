import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { X } from 'lucide-react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' }
    },
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'shock-blue',
        'shock-red'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'xl', 'round', 'icon'],
      control: { type: 'radio' }
    }
  },
  args: { onClick: fn() }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
    size: 'default'
  }
};

export const Icon: Story = {
  args: {
    children: <X />,
    variant: 'default',
    size: 'icon'
  }
};
