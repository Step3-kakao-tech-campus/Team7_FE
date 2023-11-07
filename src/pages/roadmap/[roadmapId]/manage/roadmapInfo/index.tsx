import { type GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import Info from '@/components/Roadmap/manage/GroupInfo/Info';
import SideBar from '@/components/Roadmap/manage/SideBar';
import TabBar from '@/components/Roadmap/manage/mobile/TabBar';
import Responsive from '@/components/common/Responsive';
import HeaderLayout from '@/components/layout/HeaderLayout';
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
