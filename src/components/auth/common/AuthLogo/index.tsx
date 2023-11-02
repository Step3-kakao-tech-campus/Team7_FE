import { useRouter } from 'next/router';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import TILY_LINKS from '@/constants/links';

const AuthLogo = () => {
  const router = useRouter();
  const goLogin = () => router.push(TILY_LINKS.login());

  return (
    <>
      <Responsive device="desktop">
        <Logo onClick={goLogin} isPointer />
      </Responsive>
      <Responsive device="mobile">
        <Logo imageSize={42} onClick={goLogin} isPointer />
      </Responsive>
    </>
  );
};

export default AuthLogo;
