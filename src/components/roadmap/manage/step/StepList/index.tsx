import Image from 'next/image';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import * as Styled from '@/components/roadmap/manage/step/StepList/style';
import StepModal from '@/components/roadmap/manage/step/StepModal';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';
import StepBox from './StepBox';

const StepList = () => {
  const roadmapId = Number(useQueryParam('roadmapId'));

  const { isOpen, handleOpen, handleClose } = useModalState();

  const { data } = useGetRoadmapsById({ roadmapId });

  console.log(data);

  return (
    <>
      <Styled.ManageStepHeader justify="space-between">
        <h2>STEP 관리</h2>
        <Button
          onClick={() => {
            handleOpen();
          }}>
          STEP 추가
        </Button>
      </Styled.ManageStepHeader>

      {data?.result.steps.length === 0 && <EmptyStepList />}

      {data?.result.steps.map((step) => <StepBox key={step.id} step={step} />)}

      <StepModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default StepList;

const EmptyStepList = () => {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="stepEmptyIcon" width={50} height={50} />
      <h3>생성된 STEP이 없습니다.</h3>
    </Styled.EmptyRoot>
  );
};
