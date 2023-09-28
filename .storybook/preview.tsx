import React from 'react';
import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import '@/styles/globals.css';
import { emotionTheme } from '../src/styles/emotion';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={emotionTheme}>
      <Story />
    </ThemeProvider>
  ),
];
