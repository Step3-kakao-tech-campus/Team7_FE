import StepList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList';
import StepModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/style';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import { useModalState } from '@/hooks/useModalState';
import type { RoadmapValid } from '@/hooks/useRoedmapCreate';
import type { Step } from '@/pages/roadmap/create';

interface StepSectionProps {
  step: Step;
  stepList: Step[];
  valid: RoadmapValid;
  handleOnChange: (name: string, value: string | Date | null) => void;
  resetStep: () => void;
  addStep: () => boolean;
  addYoutube: (idx: number, link: string) => void;
}

const StepSection = (props: StepSectionProps) => {
  const { step, stepList, valid, handleOnChange, resetStep, addStep, addYoutube } = props;
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
      {stepList.length === 0 ? <StepList.Empty /> : <StepList stepList={stepList} addYoutube={addYoutube} />}
      {/* <StepList.Empty /> */}

      <StepModal
        isOpen={isOpen}
        onClose={handleClose}
        step={step}
        valid={valid}
        handleOnChange={handleOnChange}
        resetStep={resetStep}
        addStep={addStep}
      />
    </>
  );
};

export default StepSection;
