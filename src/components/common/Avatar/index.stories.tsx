import type { Meta } from '@storybook/react';
import Avatar from '@/components/common/Avatar';

export default {
  component: Avatar,
} as Meta<typeof Avatar>;

export const Default = {
  args: {
    iconName: 'ic_tily',
  },

  name: 'Default',
};
