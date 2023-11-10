import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const StepSelect = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);
  const [selectOptionItems, setSelectOptionItems] = useState<SelectOption[]>([]);

  const router = useRouter();

  const { steps } = useGetRoadmapSteps(Number(router.query.roadmapId));
  const { overlapParamsToUrl } = useParamsToUrl();

  useEffect(() => {
    // 초기 useEffect에서 steps가 undefined일 경우 return
    if (!steps || !router.isReady || steps.result.steps.length === 0) return;

    const transformData = steps.result.steps.map((step) => {
      return {
        label: step.title,
        value: step.id.toString(),
      };
    });

    setSelectedOption(
      router.query.stepId ? transformData.find((data) => data.value === router.query.stepId) : transformData[0],
    );
    setSelectOptionItems(transformData);
  }, [steps]);

  const handleSelectStep = (option: SelectOption) => {
    const stepId = option.value;
    overlapParamsToUrl({ stepId });
  };

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

export default StepSelect;

const defaultValue = { label: 'STEP', value: '' };
