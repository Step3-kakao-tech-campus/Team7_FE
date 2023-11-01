import StepList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList';
import StepModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/style';
import Button from '@/components/common/Button';
import { useModalState } from '@/hooks/useModalState';

interface StepSectionProps {
  where: 'create' | 'manage';
}

const StepSection = (props: StepSectionProps) => {
  const { where } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <Styled.Root where={where}>
        <Styled.HeaderTitle>STEP{where === 'create' && ' 생성'}</Styled.HeaderTitle>
        <Styled.ButtonContainer>
          {where === 'create' && <Button>STEP 불러오기</Button>}
          <Button
            onClick={() => {
              handleOpen();
            }}>
            STEP 추가
          </Button>
        </Styled.ButtonContainer>
      </Styled.Root>
      <StepList />

      <StepModal type="create" isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default StepSection;
