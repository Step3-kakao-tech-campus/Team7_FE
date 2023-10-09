import Progress from '@/components/TILWrite/Progress';
import StepList from '@/components/TILWrite/StepList';
import * as Styled from './style';

const RoadMap = () => {
  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.RoadMap>로드맵</Styled.RoadMap>
        <Styled.Title>Java 입문 수업 (생활코딩)</Styled.Title>
        <Progress />
      </Styled.Container>
      <StepList />
    </Styled.Root>
  );
};

export default RoadMap;
