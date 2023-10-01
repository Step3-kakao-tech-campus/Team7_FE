import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/common/Checkbox';
import Flex from '@/components/common/Flex';

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default: StoryObj = {
  render: function Render() {
    const [checked, onChange] = useState<boolean>(false);

    return (
      <Flex>
        <Checkbox
          label="검색 결과에 마스터 · 매니저 포함"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
      </Flex>
    );
  },

  name: '기본',
};
