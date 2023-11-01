import styled from '@emotion/styled';
import Register from '@/components/auth/register/RegisterForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Register />
    </StyledRegisterPage>
  );
};

setLayout(RegisterPage, FullHeightLayout);

export default RegisterPage;

const StyledRegisterPage = styled.div`
  display: flex;
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
