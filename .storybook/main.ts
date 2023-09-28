import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async (options) => ({
    ...options,
    presets: options.presets
      ? [...options.presets, '@emotion/babel-preset-css-prop']
      : ['@emotion/babel-preset-css-prop'],
  }),
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/public': path.resolve(__dirname, '../public'),
        '@': path.resolve(__dirname, '../src'),
      };
    }

    /// Storybook 에서 SVG 다루기 위한 설정
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg');
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  staticDirs: ['../public'],
};

export default config;
