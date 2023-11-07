import { useResetRecoilState } from 'recoil';
import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import InfoSection from '@/components/Roadmap/RoadmapCreate/InfoSection';
import StepSection from '@/components/Roadmap/RoadmapCreate/StepSection';
import { roadmapAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const RoadmapCreate = () => {
  const resetRoadmap = useResetRecoilState(roadmapAtoms);

  useEffect(() => {
    resetRoadmap();
  }, [resetRoadmap]);

  return (
    <RoadmapCreatePage>
      <InfoSection where="create" />
      <StepSection where="create" />
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 930px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    gap: 1rem;

    & label > div {
      font-size: 18px;
      font-weight: 600;
    }

    & h3 {
      font-weight: 600;
    }

    & label input,
    textarea {
      font-size: 15px;
    }
  }
`;
