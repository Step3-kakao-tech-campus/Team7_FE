import Progress from '@/components/TILWrite/RoadMap/Progress';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

interface RoadMapInfoProps {
  handleCloseAside: () => void;
}

const RoadMapInfo = (props: RoadMapInfoProps) => {
  const { handleCloseAside } = props;

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.RoadMapContainer>
          <Styled.RoadMap>로드맵</Styled.RoadMap>
          <Icon iconName="ic_close" imageSize={16} ext="svg" onClick={handleCloseAside} alt="닫기 버튼" />
        </Styled.RoadMapContainer>

        <Styled.Title>Java 입문 수업 (생활코딩)</Styled.Title>

        <Progress />
      </Styled.Container>
    </Styled.Root>
  );
};

export default RoadMapInfo;
