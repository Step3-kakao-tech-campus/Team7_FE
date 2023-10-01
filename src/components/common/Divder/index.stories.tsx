import type { Meta, Story } from '@storybook/react';
import Divider from '@/components/common/Divder';

export default {
  component: Divider,
} as Meta<typeof Divider>;

export const Row = {
  args: {},

  name: 'row',
};

export const col = {
  args: {
    direction: 'col',
  },
  decorators: [
    (Story: Story) => (
      <div style={{ width: '500px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],

  name: 'col',
};
