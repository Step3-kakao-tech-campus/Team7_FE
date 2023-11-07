import dynamic from 'next/dynamic';
import OnboardTILModal from '@/components/main/LoggedInUser/Onboarding/TILModal';
import type { useOnbaording } from '@/components/main/LoggedInUser/useOnboarding';
import useViewport from '@/hooks/useViewport';

const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

interface OnboardProps {
  state: ReturnType<typeof useOnbaording>['state'];
  callback: ReturnType<typeof useOnbaording>['callback'];
}

const Onboard = (props: OnboardProps) => {
  const { state: onboardState, callback } = props;
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

export default Onboard;
