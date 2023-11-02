import { useRouter } from 'next/router';
import AuthLogo from '@/components/auth/common/AuthLogo';
import { TextButton } from '@/components/auth/common/TextButton';
import ByEmail from '@/components/auth/verify/ByEmail';
import { tilyLinks } from '@/constants/links';

interface VerifyFormProps {
  location: 'register' | 'password';
}

const VerifyForm = (props: VerifyFormProps) => {
  const { location } = props;
  const router = useRouter();

  return (
    <>
      <AuthLogo />
      <ByEmail location={location} />
      {location === 'register' && (
        <TextButton onClick={() => router.push(tilyLinks.login())}>이미 계정이 있나요? 로그인하기</TextButton>
      )}
    </>
  );
};

export default VerifyForm;
