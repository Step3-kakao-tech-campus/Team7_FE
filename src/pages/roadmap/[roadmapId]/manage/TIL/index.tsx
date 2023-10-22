import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import ManagePeopleTIL from '@/components/roadmap/manage/TIL/ManagePeopleTIL';
import { Root, Container, LeftArea, RightArea, Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const TIL = () => {
  return (
    <Root>
      <Container>
        <LeftArea>
          <SideBar />
        </LeftArea>

        <RightArea>
          <Header>TIL 모아보기</Header>
          <ManagePeopleTIL />
        </RightArea>
      </Container>
    </Root>
  );
};

setLayout(TIL, HeaderLayout, true);

export default TIL;
