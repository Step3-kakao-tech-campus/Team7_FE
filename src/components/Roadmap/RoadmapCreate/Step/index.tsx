import * as Styled from '@/components/Roadmap/RoadmapCreate/Step/style';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import StepSection from './StepSection';

const Step = () => {
  return (
    <>
      <Flex justify="space-between">
        <Styled.HeaderTitle>STEP 생성</Styled.HeaderTitle>
        <Styled.ButtonContainer>
          <Button>STEP 불러오기</Button>
          <Button>STEP 추가</Button>
        </Styled.ButtonContainer>
      </Flex>
      <StepSection.Empty />
    </>
  );
};

export default Step;
