import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import RoadmapInfoForm from '@/components/Roadmap/common/RoadmapInfoForm';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapCreate = () => {
  return (
    <RoadmapCreatePage>
      <RoadmapInfoForm />
    </RoadmapCreatePage>
  );
};

setLayout(RoadmapCreate, HeaderLayout);

export default RoadmapCreate;

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

const RoadmapCreatePage = styled.main`
  max-width: 930px;
  margin: 30px auto 0;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-top: 15px;
  }
`;
