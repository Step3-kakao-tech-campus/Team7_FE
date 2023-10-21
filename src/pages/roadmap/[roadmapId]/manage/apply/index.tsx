import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import ApplyTable from '@/components/roadmap/manage/apply/Table';
import { Root, Container, LeftArea, RightArea, Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const Apply = () => {
  return (
    <Root>
      <Container>
        <LeftArea>
          <SideBar />
        </LeftArea>

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
