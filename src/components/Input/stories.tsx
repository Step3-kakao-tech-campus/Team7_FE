import { Story } from '@storybook/react';
import Input from './index';
import type { Props } from './index';

export default {
  title: 'Input',
  component: Input,
};

const Template: Story<Props> = (args) => <Input {...args} />;
