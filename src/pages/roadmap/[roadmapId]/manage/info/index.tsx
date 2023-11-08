import { type GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import ManageLayout from '@/components/layout/ManageLayout';
import Info from '@/components/roadmap/manage/groupInfo/Info';
import { RightArea } from '@/pages/roadmap/[roadmapId]/manage/member';
import { setLayout } from '@/utils/layout';

const RoamapInfoPage = () => {
  return (
    <RightArea>
      <Info />
    </RightArea>
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
