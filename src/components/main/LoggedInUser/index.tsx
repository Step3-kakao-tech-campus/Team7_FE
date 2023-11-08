import MobileSidebar from '@/components/common/MobileSidebar';
import Responsive from '@/components/common/Responsive';
import GNB from '@/components/gnb/UserGNB';
import LeftSideBar from '@/components/main/LoggedInUser/LeftSideBar';
import Onboard from '@/components/main/LoggedInUser/Onboarding';
import RightArea from '@/components/main/LoggedInUser/RightArea';
import { useOnbaording } from '@/components/main/LoggedInUser/useOnboarding';
import * as Styled from './style';
import SideBar from '../mobile/UserInfo/SideBar';

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

          <MobileSidebar>
            <SideBar />
            <Styled.UserName>
              <span>김동영</span>
              <span>님</span>
            </Styled.UserName>
          </MobileSidebar>

          <RightArea ref={ref.historyRef} />
        </Styled.Inner>
      </Styled.Root>

      <Onboard state={onboardState} callback={callback} />
    </>
  );
};

export default LoggedInUser;
