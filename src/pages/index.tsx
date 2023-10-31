import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useGetUser } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import Flex from '@/components/common/Flex';
import Icon from '@/components/common/Icon';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import HeaderLayout from '@/components/layout/HeaderLayout';
import CategorySection from '@/components/main/CategorySection';
import Guest from '@/components/main/Guest';
import History from '@/components/main/History';
import SearchBar from '@/components/main/SearchBar';
import TILSection from '@/components/main/TILSection';
import SideBar from '@/components/main/mobile/SideBar';
import useAuth from '@/hooks/useAuth';
import type { EmotionTheme } from '@/styles/emotion';
import { setLayout } from '@/utils/layout';

const Home = () => {
  const { user, isLoading: userIsLoading } = useGetUser();
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Root>
          <Inner>
            <Responsive device="desktop">
              <LeftArea>
                <CustomSuspense
                  isLoading={userIsLoading}
                  fallback={<Skeleton type="circle" css={ProfileSkeletonStyles} />}>
                  {user?.image ? (
                    <Avatar imageUrl={user?.image} imageSize={240} alt="프로필 이미지" />
                  ) : (
                    <Avatar imageSize={240} iconName="ic_profile" alt="프로필 이미지" />
                  )}
                </CustomSuspense>
                <SearchBar />
                <CategorySection />
              </LeftArea>
            </Responsive>

            <Responsive device="mobile" css={MenuBarStyles}>
              <SideBar>
                <Icon iconName="ic_hamburger" imageSize={24} alt="사이드바" ext="svg" />
              </SideBar>
              <UserName>
                <span>김동영</span>
                <span>님</span>
              </UserName>
              <LayoutElement />
            </Responsive>

            <RightArea>
              <History />
              <FallbackErrorBoundary fallbackRender={TILSection.Fallback}>
                <TILSection />
              </FallbackErrorBoundary>
            </RightArea>
          </Inner>
        </Root>
      ) : (
        <Guest />
      )}
    </>
  );
};

setLayout(Home, HeaderLayout, false);

export default Home;

const Root = styled.div``;

const Inner = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: flex;
    flex-direction: column;
  }
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};

  padding: 2.5rem;
  min-height: 100vh;
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 101vh;
  padding: 3.5rem 0 0 4.5rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 20px;
  }
`;

export const ProfileSkeletonStyles = css`
  width: 240px;
  height: 240px;
`;

// 모바일

const UserName = styled.div`
  display: flex;
  align-items: center;
  & > span:first-of-type {
    font-size: 20px;
    font-weight: 700;
  }

  & > span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const MenuBarStyles = (theme: EmotionTheme) => css`
  display: flex !important;
  justify-content: space-between;
  position: sticky;
  top: ${theme.layout.main.GNBHeight};
  width: 100%;
  padding: 16px;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid ${theme.colors.gray_500};
`;

const LayoutElement = styled.div`
  width: 40px;
  height: 40px;
`;
