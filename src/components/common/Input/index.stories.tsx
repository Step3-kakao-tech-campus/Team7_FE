import type { Meta, Story } from '@storybook/react';
import Input from '@/components/common/Input';
import type { Props } from '@/components/common/Input';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const DefaultRegular = Template.bind({});
DefaultRegular.args = {
  label: '이메일',
  placeholder: '이메일을 입력해주세요.',
  status: 'default',
  labelType: 'regular',
};

export const DefaultBold = Template.bind({});
DefaultBold.args = { label: '이메일', placeholder: '이메일을 입력해주세요.', status: 'default', labelType: 'bold' };

export const Error = Template.bind({});
Error.args = {
  label: '이메일',
  placeholder: '이메일을 입력해주세요.',
  status: 'error',
  message: 'This is an error message',
  labelType: 'bold',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '이메일',
  placeholder: '이메일을 입력해주세요.',
  status: 'default',
  labelType: 'bold',
  disabled: true,
};
