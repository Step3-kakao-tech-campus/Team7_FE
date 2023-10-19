import StepList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList';
import StepModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/style';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import { useModalState } from '@/hooks/useModalState';
import type { Step } from '@/pages/roadmap/create';

interface StepSectionProps {
  step: Step;
  handleOnChange: (name: string, value: string | Date | null) => void;
  resetStep: () => void;
  addStep: () => void;
}

const StepSection = (props: StepSectionProps) => {
  const { step, handleOnChange, resetStep, addStep } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();
  return (
    <>
      <Flex justify="space-between">
        <Styled.HeaderTitle>STEP 생성</Styled.HeaderTitle>
        <Styled.ButtonContainer>
          <Button>STEP 불러오기</Button>
          <Button
            onClick={() => {
              handleOpen();
            }}>
            STEP 추가
          </Button>
        </Styled.ButtonContainer>
      </Flex>
      <StepList.Empty />
      <StepModal
        isOpen={isOpen}
        onClose={handleClose}
        step={step}
        handleOnChange={handleOnChange}
        resetStep={resetStep}
        addStep={addStep}
      />
    </>
  );
};

export default StepSection;
