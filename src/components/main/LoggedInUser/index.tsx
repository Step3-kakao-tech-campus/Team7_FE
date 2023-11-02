import { useGetUser } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import GNB from '@/components/common/GNB';
import Icon from '@/components/common/Icon';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import CategorySection from '@/components/main/CategorySection';
import History from '@/components/main/History';
import SearchBar from '@/components/main/SearchBar';
import TILSection from '@/components/main/TILSection';
import SideBar from '@/components/main/mobile/SideBar';
import * as Styled from './style';

const LoggedInUser = () => {
  const { user, isLoading: userIsLoading } = useGetUser();

  return (
    <>
      <GNB />
      <Styled.Root>
        <Styled.Inner>
          <Responsive device="desktop">
            <Styled.LeftArea>
              <CustomSuspense
                isLoading={userIsLoading}
                fallback={<Skeleton type="circle" css={Styled.ProfileSkeletonStyles} />}>
                {user?.image ? (
                  <Avatar imageUrl={user?.image} imageSize={240} alt="프로필 이미지" />
                ) : (
                  <Avatar imageSize={240} iconName="ic_profile" alt="프로필 이미지" />
                )}
              </CustomSuspense>
              <SearchBar />
              <CategorySection />
            </Styled.LeftArea>
          </Responsive>

          <Responsive device="mobile" css={Styled.MenuBarStyles}>
            <SideBar>
              <Icon iconName="ic_hamburger" imageSize={24} alt="사이드바" ext="svg" />
            </SideBar>
            <Styled.UserName>
              <span>김동영</span>
              <span>님</span>
            </Styled.UserName>
            <Styled.LayoutElement />
          </Responsive>

          <Styled.RightArea>
            <History />
            <FallbackErrorBoundary FallbackRender={TILSection.Fallback}>
              <TILSection />
            </FallbackErrorBoundary>
          </Styled.RightArea>
        </Styled.Inner>
      </Styled.Root>
    </>
  );
};

export default LoggedInUser;
