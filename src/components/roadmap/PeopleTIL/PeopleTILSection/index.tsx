import TIL from '@/components/roadmap/PeopleTIL/TIL';
import * as Styled from './style';

const PeopleTILSection = () => {
  return (
    <Styled.Root>
      <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
      <Styled.Container>
        <TIL />
        <TIL />
        <TIL />
        <TIL />
        <TIL />
      </Styled.Container>
    </Styled.Root>
  );
};

export default PeopleTILSection;
