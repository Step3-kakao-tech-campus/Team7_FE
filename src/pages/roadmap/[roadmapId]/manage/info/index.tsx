import { type GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import TILyHead from '@/components/common/NextHead/TILyHead';
import ManageLayout from '@/components/layout/ManageLayout';
import RoadmapInfoForm from '@/components/roadmap/common/RoadmapInfoForm';
import { setLayout } from '@/utils/layout';

const RoamapInfoPage = () => {
  return (
    <>
      <TILyHead title="TIL-y | 로드맵 정보" />
      <RoadmapInfoForm />
    </>
  );
};

setLayout(RoamapInfoPage, ManageLayout);

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
