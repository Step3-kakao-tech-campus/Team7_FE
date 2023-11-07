import Icon from '@/components/common/Icon';
import SideBar from '@/components/main/mobile/UserInfo/SideBar';
import * as Styled from './style';

const UserInfo = () => {
  return (
    <>
      <SideBar>
        <Icon iconName="ic_hamburger" imageSize={24} alt="사이드바" ext="svg" />
      </SideBar>
      <Styled.UserName>
        <span>김동영</span>
        <span>님</span>
      </Styled.UserName>
      <Styled.LayoutElement />
    </>
  );
};

export default UserInfo;
