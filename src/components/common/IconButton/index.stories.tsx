import type { Meta } from '@storybook/react';
import IconButton from '@/components/common/IconButton';

export default {
  component: IconButton,
} as Meta<typeof IconButton>;

export const Default = {
  args: {
    children: '잠금된 풀이',
    variant: 'default',
    iconName: 'ic_lock',
  },

  name: 'Default',
};

export const Primary = {
  args: {
    children: '잠금된 풀이',
    variant: 'primary',
    iconName: 'ic_lock',
  },

  name: 'Primary',
};

export const Outline = {
  args: {
    children: '잠금된 풀이',
    variant: 'outline',
    iconName: 'ic_lock',
  },

  name: 'Outline',
};

export const Ghost = {
  args: {
    children: '잠금된 풀이',
    variant: 'ghost',
    iconName: 'ic_lock',
  },

  name: 'Ghost',
};

export const Disabled = {
  args: {
    children: '잠금된 풀이',
    variant: 'primary',
    iconName: 'ic_lock',
    disabled: true,
  },

  name: 'Disabled',
};
