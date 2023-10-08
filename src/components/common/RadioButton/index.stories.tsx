import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flex from '@/components/common/Flex';
import RadioButton from '@/components/common/RadioButton';

export default {
  component: RadioButton,
} as Meta<typeof RadioButton>;

const data = [
  { value: '홍박사', label: '홍박사' },
  { value: '김동영', label: '김동영' },
  { value: '조준서', label: '조준서' },
  { value: '김수현', label: '김수현' },
  { value: '이상명', label: '이상명' },
];

export const Row: StoryObj = {
  render: function Render() {
    const [checked, setChecked] = useState('yes');

    return (
      <Flex gap={1}>
        {data.map((item) => {
          return (
            <RadioButton
              key={item.value}
              value={item.value}
              label={item.label}
              checked={checked === item.value}
              onChange={(e) => {
                setChecked(e.target.value);
              }}
            />
          );
        })}
      </Flex>
    );
  },

  name: '가로',
};

export const Col: StoryObj = {
  render: function Render() {
    const [checked, setChecked] = useState('yes');

    return (
      <Flex dir="col" gap={1}>
        {data.map((item) => {
          return (
            <RadioButton
              key={item.value}
              value={item.value}
              label={item.label}
              checked={checked === item.value}
              onChange={(e) => {
                setChecked(e.target.value);
              }}
            />
          );
        })}
      </Flex>
    );
  },

  name: '세로',
};
