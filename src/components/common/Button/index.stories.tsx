import type { Meta } from '@storybook/react';
import Button from '@/components/common/Button';

export default {
  component: Button,
} as Meta<typeof Button>;

export const Default = {
  args: {
    children: '기본 버튼',
    variant: 'default',
  },

  name: 'Default',
};

export const Primary = {
  args: {
    children: '프라이머리 버튼',
    variant: 'primary',
  },

  name: 'Primary',
};

export const Outline = {
  args: {
    children: '아웃라인 버튼',
    variant: 'outline',
  },

  name: 'Outline',
};

export const Ghost = {
  args: {
    children: '아웃라인 버튼',
    variant: 'ghost',
  },

  name: 'Ghost',
};

export const Disabled = {
  args: {
    children: 'Disabled 버튼',
    variant: 'primary',
    disabled: true,
  },

  name: 'Disabled',
};
