import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import StepList from '@/components/roadmap/roadmapCreate/StepSection/StepList';
import StepModal from '@/components/roadmap/roadmapCreate/StepSection/StepModal';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';
import StepBox from './StepList/StepBox';

const StepSection = () => {
  const roadmapId = Number(useQueryParam('roadmapId'));

  const { isOpen, handleOpen, handleClose } = useModalState();

  const { data } = useGetRoadmapsById({ roadmapId });

  return (
    <>
      <Flex justify="space-between">
        <h2>STEP 관리</h2>
        <Button
          onClick={() => {
            handleOpen();
          }}>
          STEP 추가
        </Button>
      </Flex>

      {/* {data?.result.steps.map((step, idx) => <StepBox key={step.id ?? idx} idx={idx} step={step} where="create" />)} */}

      <StepModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default StepSection;
