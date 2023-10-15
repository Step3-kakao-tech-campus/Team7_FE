import styled from '@emotion/styled';
import ChangePassword from '@/components/auth/change-password';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

const ChangePasswordPage = () => {
  return (
    <StyledChangePasswordPage>
      <ChangePassword />
    </StyledChangePasswordPage>
  );
};

setLayout(ChangePasswordPage, FullHeightLayout);

export default ChangePasswordPage;

const StyledChangePasswordPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  max-width: 400px;
`;
