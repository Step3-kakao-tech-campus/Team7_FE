import styled from '@emotion/styled';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';

export const VerifyPage = () => {
  return <StyledVerifyPage>{/* <Verify /> */}</StyledVerifyPage>;
};

setLayout(VerifyPage, FullHeightLayout);

export default VerifyPage;

const StyledVerifyPage = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  padding: 64px 24px;
  max-width: 420px;
`;
