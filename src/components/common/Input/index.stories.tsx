import { css } from '@emotion/react';
import type { Meta, Story } from '@storybook/react';
import Input from './index';
import type { InputProps } from './index';

export default {
  component: Input,
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

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

export const Search = {
  render: () => {
    return (
      <Input
        css={(theme) => css`
          background-color: ${theme.colors.gray_100};
          border: 0.1rem solid ${theme.colors.gray_100};
          width: 300px;
          font-size: 16px;
        `}
        placeholder="검색어를 입력하세요"
        endIcon="ic_search_2x"
      />
    );
  },
  name: 'Search',
  decorators: [
    (Story: Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
