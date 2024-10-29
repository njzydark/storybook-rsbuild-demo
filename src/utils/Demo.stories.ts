import { Meta, StoryObj } from '@storybook/react';
import { demo } from './demo';
import { expect } from '@storybook/test';

const Utils = () => {
  return 'utils';
};

const meta: Meta<typeof Utils> = {
  title: 'DemoUtils',
  component: Utils,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UtilsDemo: Story = {
  play: () => {
    const res = demo(1, 2);

    expect(res).toBe(3);
  },
};
