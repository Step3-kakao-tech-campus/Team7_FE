import SideBar from '@/components/Roadmap/manage/SideBar';
import ManagePeopleTIL from '@/components/Roadmap/manage/TIL/ManagePeopleTIL';
import TabBar from '@/components/Roadmap/manage/mobile/TabBar';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { Root, Container, LeftArea, RightArea, Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const TIL = () => {
  return (
    <Root>
      <Container>
        <Responsive device="desktop">
          <LeftArea>
            <SideBar />
          </LeftArea>
        </Responsive>

        <Responsive device="mobile" asChild>
          <TabBar />
        </Responsive>

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
