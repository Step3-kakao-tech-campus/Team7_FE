import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import CommonCheckbox from '@/components/common/Checkbox';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(MASTER_MANAGER);

  const router = useRouter();
  const { steps } = useGetRoadmapSteps(Number(router.query.roadmapId));
  const { overlapParamsToUrl } = useParamsToUrl();

  const transformData = steps?.result.steps.map((step) => {
    return {
      label: step.title,
      value: step.id.toString(),
    };
  });

  useEffect(() => {
    if (!steps || !router.isReady || steps.result.steps.length === 0) return;

    if (!router.query.isMember) {
      overlapParamsToUrl({
        stepId: router.query.stepId ? router.query.stepId : transformData?.[0].value,
        isMember: 'false',
      });
      setChecked(MASTER_MANAGER);
    } else {
      setChecked(router.query.isMember === 'false' ? MASTER_MANAGER : MEMBER);
    }
  }, [router.isReady, steps]);

  return (
    <Styled.Root>
      <CommonCheckbox
        textSize={0.875}
        label="검색 결과에 마스터 · 매니저 포함"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          overlapParamsToUrl({ isMember: (!e.target.checked).toString() });
        }}
      />
    </Styled.Root>
  );
};

export default Checkbox;

const MASTER_MANAGER = true;
const MEMBER = false;
