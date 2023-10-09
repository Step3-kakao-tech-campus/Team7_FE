import Progress from '@/components/TILWrite/Progress';
import * as Styled from './style';

const RoadMapInfo = () => {
  return (
    <Styled.Container>
      <Styled.RoadMap>로드맵</Styled.RoadMap>
      <Styled.Title>Java 입문 수업 (생활코딩)</Styled.Title>
      <Progress />
    </Styled.Container>
  );
};

export default RoadMapInfo;
