import dynamic from 'next/dynamic';
import GNB from '@/components/GNB/UserGNB';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import Responsive from '@/components/common/Responsive';
import History from '@/components/main/LoggedInUser/History';
import LeftSideBar from '@/components/main/LoggedInUser/LeftSideBar';
import OnboardTILModal from '@/components/main/LoggedInUser/Onboarding/TILModal';
import TILSection from '@/components/main/LoggedInUser/TILSection';
import { useOnbaording } from '@/components/main/LoggedInUser/useOnboarding';
import UserInfo from '@/components/main/mobile/UserInfo';
import useViewport from '@/hooks/useViewport';
import * as Styled from './style';

const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

const LoggedInUser = () => {
  const { state: onboardState, ref, callback } = useOnbaording();

  const { isMobile } = useViewport();

  return (
    <>
      {onboardState.isOnboarding && !isMobile && (
        <Joyride
          callback={callback.handleJoyrideCallback}
          continuous
          run={onboardState.run}
          scrollToFirstStep
          showProgress
          stepIndex={onboardState.stepIndex}
          steps={onboardState.steps}
        />
      )}

      <GNB ref={ref.TILButtonRef} />
      <Styled.Root>
        <Styled.Inner>
          <Responsive device="desktop">
            <LeftSideBar ref={ref.searchRef} />
          </Responsive>

          <Responsive device="mobile" css={Styled.MenuBarStyles}>
            <UserInfo />
          </Responsive>

          <Styled.RightArea>
            <History ref={ref.historyRef} />
            <FallbackErrorBoundary FallbackRender={TILSection.Fallback}>
              <TILSection />
            </FallbackErrorBoundary>
          </Styled.RightArea>
        </Styled.Inner>
      </Styled.Root>

      <OnboardTILModal
        isOpen={onboardState.isModalOpen}
        isOnClickOutsideClose={false}
        onClose={() => {}}
        isBackDrop={false}
        isCategoryNextStep={onboardState.isCategoryNextStep}
      />
    </>
  );
};

export default LoggedInUser;
