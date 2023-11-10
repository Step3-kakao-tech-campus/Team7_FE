import type { GetServerSideProps } from 'next';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import TILyHead from '@/components/common/NextHead/TILyHead';
import HeaderLayout from '@/components/layout/HeaderLayout';
import FeatureInfoSection from '@/components/roadmap/peopleTIL/FeatureInfoSection';
import PeopleTILSection from '@/components/roadmap/peopleTIL/PeopleTILSection';
import { setLayout } from '@/utils/layout';

const PeopleTil = () => {
  return (
    <>
      <TILyHead title="TIL-y | 다른 사람 TIL 보기" />
      <Root>
        <Inner>
          <FeatureInfoSection />
          <QueryErrorResetBoundary>
            <FallbackErrorBoundary FallbackRender={PeopleTILSection.Fallback}>
              <PeopleTILSection />
            </FallbackErrorBoundary>
          </QueryErrorResetBoundary>
        </Inner>
      </Root>
    </>
  );
};

export default PeopleTil;

setLayout(PeopleTil, HeaderLayout);

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

const Root = styled.main``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;
