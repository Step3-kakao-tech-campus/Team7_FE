import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import ApplyTable from '@/components/roadmap/manage/apply/Table';
import TabBar from '@/components/roadmap/manage/mobile/TabBar';
import { Container, LeftArea, RightArea, Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { ManageContainer } from '@/pages/roadmap/[roadmapId]/manage/roadmapInfo';
import { setLayout } from '@/utils/layout';

const Apply = () => {
  return (
    <ManageContainer>
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
    </ManageContainer>
  );
};

setLayout(Apply, HeaderLayout);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (!isUserLogin) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Apply;
