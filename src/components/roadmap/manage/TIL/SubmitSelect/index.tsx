import { useState } from 'react';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';

const selectOptionItems: SelectOption[] = [
  {
    label: '제출자',
    value: 'true',
  },
  {
    label: '미제출자',
    value: 'false',
  },
];

const SubmitSelect = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);

  const { overlapParamsToUrl } = useParamsToUrl();

  const handleSelectStep = (option: SelectOption) => {
    const isSubmit = option.value;
    overlapParamsToUrl({ isSubmit });
  };

  return (
    <Select
      selectedOption={selectedOption}
      onChangeOption={(option) => setSelectedOption(option)}
      callbackFunction={handleSelectStep}
      options={selectOptionItems}
    />
  );
};

export default SubmitSelect;

const defaultValue = { label: '제출자', value: 'true' };
