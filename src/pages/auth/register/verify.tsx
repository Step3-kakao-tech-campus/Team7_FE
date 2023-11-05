import styled from '@emotion/styled';
import SocialLogin from '@/components/auth/common/SocialLogin';
import VerifyForm from '@/components/auth/verify/VerifyForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

const RegisterVerifyPage = () => {
  return (
    <AuthPageContainer>
      <VerifyForm location="register" />
      <SocialLogin />
    </AuthPageContainer>
  );
};

setLayout(RegisterVerifyPage, FullHeightLayout);

export default RegisterVerifyPage;

export const AuthPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 400px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 100dvh;
  }
`;
