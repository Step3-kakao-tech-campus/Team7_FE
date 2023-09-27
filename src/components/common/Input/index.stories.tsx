import type { Meta } from '@storybook/react';
import Input from '@/components/common/Input';

export default {
  component: Input,
  title: 'Input',
} as Meta<typeof Input>;

export const DefaultRegular = {
  args: {
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
    status: 'default',
    labelType: 'regular',
  },
};

export const DefaultBold = {
  args: { label: '이메일', placeholder: '이메일을 입력해주세요.', status: 'default', labelType: 'bold' },
};

export const Error = {
  args: {
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
    status: 'error',
    message: 'This is an error message',
    labelType: 'bold',
  },
};

export const Disabled = {
  args: {
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
    status: 'default',
    labelType: 'bold',
    disabled: true,
  },
};
