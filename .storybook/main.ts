import type { StorybookConfig } from 'storybook-react-rsbuild';
import { dirname, join } from 'path';
import '@storybook/addon-console';

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackAddons: [
    {
      name: getAbsolutePath('@storybook/addon-coverage'),
      options: {
        istanbul: {
          include: ['src/**/*.stories.@(ts|tsx)'],
          exclude: [],
        },
      },
    },
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: true,
  },
};

export default config;
