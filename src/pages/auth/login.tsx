import { useRouter } from 'next/router';
import { TextButton } from '@/components/auth/common/TextButton';
import Login from '@/components/auth/login';
import Flex from '@/components/common/Flex';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { tilyLinks } from '@/constants/links';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const LoginPage = () => {
  const router = useRouter();
  return (
    <AuthPageContainer>
      <Login />
      <Flex justify="space-between" fullWidth>
        <TextButton onClick={() => router.push(tilyLinks.verify())}>회원가입</TextButton>
        <TextButton onClick={() => router.push(tilyLinks.passwordVerify())}>비밀번호 찾기</TextButton>
      </Flex>
    </AuthPageContainer>
  );
};

setLayout(LoginPage, FullHeightLayout);

export default LoginPage;
