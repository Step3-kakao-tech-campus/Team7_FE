import type { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface FullHeightLayoutProps {
  children: ReactNode;
}

const FullHeightLayout: FC<FullHeightLayoutProps> = ({ children }) => {
  return <StyledFullHeightLayout>{children}</StyledFullHeightLayout>;
};

export default FullHeightLayout;

const StyledFullHeightLayout = styled.div`
  height: 100vh;
`;
