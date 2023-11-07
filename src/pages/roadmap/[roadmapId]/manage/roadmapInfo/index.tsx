import { type GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import Info from '@/components/roadmap/manage/groupInfo/Info';
import TabBar from '@/components/roadmap/manage/mobile/TabBar';
import { Container, LeftArea, RightArea } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const RoamapInfoPage = () => {
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
          <Info />
        </RightArea>
      </Container>
    </ManageContainer>
  );
};

setLayout(RoamapInfoPage, HeaderLayout);

export default RoamapInfoPage;

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

export const ManageContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 25px;
`;
