import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useGetUsers } from '@/api/hooks/user';
import GNB from '@/components/GNB/UserGNB';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import Icon from '@/components/common/Icon';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import CategorySection from '@/components/main/LoggedInUser/CategorySection';
import History from '@/components/main/LoggedInUser/History';
import TILModal from '@/components/main/LoggedInUser/Onboarding/TILModal';
import SearchBar from '@/components/main/LoggedInUser/SearchBar';
import TILSection from '@/components/main/LoggedInUser/TILSection';
import { useOnbaording } from '@/components/main/LoggedInUser/useOnboarding';
import SideBar from '@/components/main/mobile/SideBar';
import TILY_LINKS from '@/constants/links';
import useViewport from '@/hooks/useViewport';
import * as Styled from './style';

const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

const LoggedInUser = () => {
  const { user, isLoading: userIsLoading } = useGetUsers();
  const { state, ref, callback } = useOnbaording();
  const [isOnboarding, setIsOnboarding] = useState(false);
  const { isMobile } = useViewport();
  const router = useRouter();

  useEffect(() => {
    const mainOnboarding = localStorage.getItem('mainOnboarding');

    if (mainOnboarding === null) {
      setIsOnboarding(true);
    }
  }, []);

  return (
    <>
      {isOnboarding && !isMobile && (
        <Joyride
          callback={callback.handleJoyrideCallback}
          continuous
          run={state.run}
          scrollToFirstStep
          showProgress
          stepIndex={state.stepIndex}
          steps={state.steps}
        />
      )}

      <GNB ref={ref.TILButtonRef} />
      <Styled.Root>
        <Styled.Inner>
          <Responsive device="desktop">
            <Styled.LeftArea>
              <CustomSuspense
                isLoading={userIsLoading}
                fallback={<Skeleton type="circle" css={Styled.ProfileSkeletonStyles} />}>
                <button onClick={() => router.push(TILY_LINKS.mypage())}>
                  {user?.image ? (
                    <Avatar imageUrl={user?.image} imageSize={240} alt="프로필 이미지" />
                  ) : (
                    <Avatar imageSize={240} iconName="ic_profile" alt="프로필 이미지" />
                  )}
                </button>
              </CustomSuspense>
              <SearchBar ref={ref.searchRef} />
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
            <History ref={ref.historyRef} />
            <FallbackErrorBoundary FallbackRender={TILSection.Fallback}>
              <TILSection />
            </FallbackErrorBoundary>
          </Styled.RightArea>
        </Styled.Inner>
      </Styled.Root>

      <TILModal
        isOpen={state.isModalOpen}
        isOnClickOutsideClose={false}
        isBackDrop={false}
        isCategoryNextStep={state.isCategoryNextStep}
      />
    </>
  );
};

export default LoggedInUser;
