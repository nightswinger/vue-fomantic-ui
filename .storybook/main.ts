import { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-controls', '@storybook/addon-actions'],
  staticDirs: ['./assets', '../docs/public/images'],

  docs: {
    autodocs: true
  }
};

export default config;
