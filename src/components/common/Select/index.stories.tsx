import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';

export default {
  component: Select,
} as Meta<typeof Select>;

const selectOptionItems: SelectOption[] = [
  {
    label: '홍박사',
    value: '이한홍',
  },
  {
    label: '김동영',
    value: '김동영',
  },
  {
    label: '조준서',
    value: '조준서',
  },
  {
    label: '이상명',
    value: '이상명',
  },
  {
    label: '김수현',
    value: '김수현',
  },
];

const defaultValue = { label: '7조', value: '' };

export const WithState: StoryObj<typeof Select> = {
  render: function Render() {
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);

    return (
      <Select
        selectedOption={selectedOption}
        onChangeOption={(option) => setSelectedOption(option)}
        options={selectOptionItems}
      />
    );
  },
};
