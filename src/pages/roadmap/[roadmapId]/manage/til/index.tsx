import type { GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import TabBar from '@/components/roadmap/manage/mobile/TabBar';
import ManagePeopleTIL from '@/components/roadmap/manage/til/ManagePeopleTIL';
import { Container, LeftArea, RightArea, Header } from '@/pages/roadmap/[roadmapId]/manage/member';
import { ManageContainer } from '@/pages/roadmap/[roadmapId]/manage/roadmapInfo';
import { setLayout } from '@/utils/layout';

const TIL = () => {
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
          <Header>TIL 모아보기</Header>
          <ManagePeopleTIL />
        </RightArea>
      </Container>
    </ManageContainer>
  );
};

setLayout(TIL, HeaderLayout);

export default TIL;

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
