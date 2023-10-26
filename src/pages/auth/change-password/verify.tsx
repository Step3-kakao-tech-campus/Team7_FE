import styled from '@emotion/styled';
import ByEmail from '@/components/auth/verify/ByEmail';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

export const PasswordVerifyPage = () => {
  return (
    <StyledVerifyPage>
      <Responsive device="desktop">
        <Logo />
      </Responsive>
      <Responsive device="mobile">
        <Logo imageSize={42} />
      </Responsive>
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
  padding: 0 30px;
  max-width: 400px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 100dvh;
  }
`;
