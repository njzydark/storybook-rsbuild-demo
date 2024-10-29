import { Meta, StoryObj } from '@storybook/react';
import { demo, demo2 } from './demo';
import { expect } from '@storybook/test';

const meta: Meta = {
  tags: ['!autodocs'],
  render: () => (
    <>
      <h1>hello</h1>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UtilsDemo: Story = {
  play: async ({ step }) => {
    await step('demo1', () => {
      const res = demo(1, 2);
      expect(res).toBe(3);
    });

    await step('demo2', () => {
      const res = demo2(3, 2);
      expect(res).toBe(1);
    });
  },
};
