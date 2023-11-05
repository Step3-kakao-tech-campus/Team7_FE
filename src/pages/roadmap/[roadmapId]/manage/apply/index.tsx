import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import SideBar from '@/components/Roadmap/manage/SideBar';
import ApplyTable from '@/components/Roadmap/manage/apply/Table';
import TabBar from '@/components/Roadmap/manage/mobile/TabBar';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
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
