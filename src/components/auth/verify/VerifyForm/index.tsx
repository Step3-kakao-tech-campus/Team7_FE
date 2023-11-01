import { useRouter } from 'next/router';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import { tilyLinks } from '@/constants/links';
import { TextButton } from '../../TextButton';
import ByEmail from '../ByEmail';

interface VerifyFormProps {
  location: 'register' | 'password';
}

const VerifyForm = (props: VerifyFormProps) => {
  const { location } = props;
  const router = useRouter();

  const goLogin = () => router.push(tilyLinks.login());

  return (
    <>
      <Responsive device="desktop">
        <Logo onClick={goLogin} isPointer />
      </Responsive>
      <Responsive device="mobile">
        <Logo imageSize={42} onClick={goLogin} isPointer />
      </Responsive>
      <ByEmail location={location} />
      {location === 'register' && <TextButton onClick={goLogin}>이미 계정이 있나요? 로그인하기</TextButton>}
    </>
  );
};

export default VerifyForm;
