import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRouter } from 'next/router';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useGetTilsParam } from '@/api/hooks/til';
import { useGetUser } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import Flex from '@/components/common/Flex';
import Skeleton from '@/components/common/Skeleton';
import HeaderLayout from '@/components/layout/HeaderLayout';
import CategorySection from '@/components/main/CategorySection';
import History from '@/components/main/History';
import SearchBar from '@/components/main/SearchBar';
import TILSection from '@/components/main/TILSection';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import { setLayout } from '@/utils/layout';

const Home = () => {
  const router = useRouter();
  const { user, isLoading: userIsLoading } = useGetUser();
  const { tils, isLoading, fetchNextPage, hasNextPage } = useGetTilsParam({ queryKey: [router.query] });
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage]);

  return (
    <>
      <Root>
        <Inner>
          <LeftArea>
            <CustomSuspense isLoading={userIsLoading} fallback={<Skeleton type="circle" css={ProfileSkeletonStyles} />}>
              {user?.image ? (
                <Avatar imageUrl={user?.image} imageSize={240} alt="프로필 이미지" />
              ) : (
                <Avatar imageSize={240} iconName="ic_profile" alt="프로필 이미지" />
              )}
            </CustomSuspense>
            <SearchBar />
            <CategorySection />
          </LeftArea>

          <RightArea>
            <History />
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary key={router.pathname} onReset={reset} fallbackRender={TILSection.Fallback}>
                  <TILSection tils={tils} isLoading={isLoading} />
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
            <ObserverInterSectionTarget ref={ref} />
          </RightArea>
        </Inner>
      </Root>
    </>
  );
};

setLayout(Home, HeaderLayout, true);

export default Home;

const Root = styled.div``;

const Inner = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};

  padding: 2.5rem;
  height: 100vh;
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 101vh;
  padding: 3.5rem 0 0 4.5rem;
`;

const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;

export const ProfileSkeletonStyles = css`
  width: 240px;
  height: 240px;
`;
