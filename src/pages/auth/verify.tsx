import styled from '@emotion/styled';
import Verify from '@/components/auth/verify/Verify';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

export const VerifyPage = () => {
  return (
    <StyledVerifyPage>
      <Verify />
    </StyledVerifyPage>
  );
};

setLayout(VerifyPage, FullHeightLayout);

export default VerifyPage;

const StyledVerifyPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  max-width: 400px;
`;
