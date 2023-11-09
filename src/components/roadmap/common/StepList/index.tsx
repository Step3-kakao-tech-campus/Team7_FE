import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import * as Styled from '@/components/roadmap/common/StepList/style';
import StepModal from '@/components/roadmap/manage/step/StepModal';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';
import StepBox from './StepBox';

const StepList = () => {
  const roadmapId = Number(useQueryParam('roadmapId'));

  const path = useRouter().asPath.split('/').at(-1) === 'step' ? 'manage' : 'detail';

  const { isOpen, handleOpen, handleClose } = useModalState();

  const { data } = useGetRoadmapsById({ roadmapId });

  return (
    <>
      <Styled.ManageStepHeader justify="space-between">
        {path === 'manage' && (
          <>
            <h2>STEP 관리</h2>
            <Button
              onClick={() => {
                handleOpen();
              }}>
              STEP 추가
            </Button>
          </>
        )}
      </Styled.ManageStepHeader>

      {data?.result.steps.length === 0 && <EmptyStepList />}

      {data?.result.steps.map((step) => <StepBox key={step.id} step={step} />)}

      {path === 'manage' && <StepModal isOpen={isOpen} onClose={handleClose} />}
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
