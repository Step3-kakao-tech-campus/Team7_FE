import styled from '@emotion/styled';
import Register from '@/components/auth/register/Register';
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
  max-width: 400px;
`;
