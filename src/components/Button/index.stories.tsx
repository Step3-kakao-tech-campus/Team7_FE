import type { Story } from '@storybook/react';
import { icLock } from '@/assets/icons';
import type { Props } from '.';
import Button from '.';

export default {
  title: 'shared/Button',
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: <Button.Text>Button Test</Button.Text>,
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: 'default',
  children: (
    <>
      <Button.Image style={{ margin: '3px 7px 0 0' }} src={icLock} alt="" />
      <Button.Text>Button Test</Button.Text>
    </>
  ),
};
