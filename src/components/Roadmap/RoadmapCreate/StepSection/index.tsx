import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import StepList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList';
import StepModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/style';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import { useModalState } from '@/hooks/useModalState';
import { roadmapStepAtoms } from '../states/roadmapCreateAtoms';

const StepSection = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  const stepList = useRecoilValue(roadmapStepAtoms);

  useEffect(() => {
    console.log(stepList);
  }, [stepList]);

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
      {stepList.length === 0 ? <StepList.Empty /> : <StepList stepList={stepList} />}
      {/* <StepList.Empty /> */}

      <StepModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default StepSection;
