import * as Styled from '@/components/Roadmap/RoadmapCreate/Header/style';
import Button from '@/components/common/Button';

const Header = () => {
  return (
    <Styled.Root>
      <h1>그룹 로드맵 생성</h1>
      <Button>생성하기</Button>
    </Styled.Root>
  );
};

export default Header;
