import router from 'next/router';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import * as Styled from '@/components/gnb/common/GNBLogo/style';
import TILY_LINKS from '@/constants/links';

const GNBLogo = () => {
  return (
    <button onClick={() => router.push(TILY_LINKS.home())}>
      <Styled.LogoContainer>
        <Responsive device="mobile">
          <Logo imageSize={24} />
        </Responsive>

        <Responsive device="desktop">
          <Logo imageSize={32} />
        </Responsive>
      </Styled.LogoContainer>
    </button>
  );
};

export default GNBLogo;
