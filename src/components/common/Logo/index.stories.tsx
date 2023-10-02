import type { Meta } from '@storybook/react';
import Logo from '@/components/common/Logo';

export default {
  component: Logo,
} as Meta<typeof Logo>;

export const Default = {
  args: {},
};

export const OnlyLogo = {
  args: {
    type: 'logo',
    imageWidth: 100,
    imageHeight: 100,
  },
};
