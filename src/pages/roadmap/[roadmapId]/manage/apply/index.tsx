import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import ApplyTable from '@/components/roadmap/manage/apply/Table';
import TabBar from '@/components/roadmap/manage/mobile/TabBar';
import { Root, Container, LeftArea, RightArea, Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const Apply = () => {
  return (
    <Root>
      <Container>
        <Responsive device="desktop">
          <LeftArea>
            <SideBar />
          </LeftArea>
        </Responsive>

        <Responsive device="mobile">
          <TabBar />
        </Responsive>

        <RightArea>
          <Header>신청 관리</Header>
          <ApplyTable />
        </RightArea>
      </Container>
    </Root>
  );
};

setLayout(Apply, HeaderLayout, true);

export default Apply;
