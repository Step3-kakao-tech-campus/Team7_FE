import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

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

  const router = useRouter();
  const { overlapParamsToUrl } = useParamsToUrl();

  const handleSelectStep = (option: SelectOption) => {
    const isSubmit = option.value;
    overlapParamsToUrl({ isSubmit });
  };

  useEffect(() => {
    if (!router.isReady) return;

    setSelectedOption(router.query.isSubmit === 'false' ? selectOptionItems[1] : selectOptionItems[0]);
  }, [router.isReady]);

  return (
    <Select
      css={Styled.SelectContainerStyles}
      selectedOption={selectedOption}
      onChangeOption={(option) => setSelectedOption(option)}
      callbackFunction={handleSelectStep}
      options={selectOptionItems}
    />
  );
};

export default SubmitSelect;

const defaultValue = { label: '제출자', value: 'true' };
