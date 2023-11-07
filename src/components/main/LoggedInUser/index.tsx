import Responsive from '@/components/common/Responsive';
import GNB from '@/components/gnb/UserGNB';
import LeftSideBar from '@/components/main/LoggedInUser/LeftSideBar';
import Onboard from '@/components/main/LoggedInUser/Onboarding';
import RightArea from '@/components/main/LoggedInUser/RightArea';
import { useOnbaording } from '@/components/main/LoggedInUser/useOnboarding';
import UserInfo from '@/components/main/mobile/UserInfo';
import * as Styled from './style';

const LoggedInUser = () => {
  const { state: onboardState, ref, callback } = useOnbaording();

  return (
    <>
      <GNB ref={ref.TILButtonRef} />
      <Styled.Root>
        <Styled.Inner>
          <Responsive device="desktop">
            <LeftSideBar ref={ref.searchRef} />
          </Responsive>

          <Responsive device="mobile" css={Styled.MenuBarStyles}>
            <UserInfo />
          </Responsive>

          <RightArea ref={ref.historyRef} />
        </Styled.Inner>
      </Styled.Root>

      <Onboard state={onboardState} callback={callback} />
    </>
  );
};

export default LoggedInUser;
