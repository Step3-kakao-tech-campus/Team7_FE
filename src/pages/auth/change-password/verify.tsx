import styled from '@emotion/styled';
import ByEmail from '@/components/auth/verify/ByEmail';
import Logo from '@/components/common/Logo';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

export const PasswordVerifyPage = () => {
  return (
    <StyledVerifyPage>
      <Logo />
      <ByEmail type="changePassword" />
    </StyledVerifyPage>
  );
};

setLayout(PasswordVerifyPage, FullHeightLayout);

export default PasswordVerifyPage;

const StyledVerifyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  max-width: 400px;
`;
