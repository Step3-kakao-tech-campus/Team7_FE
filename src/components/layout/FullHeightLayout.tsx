import type { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const FullHeightLayout: FC = (props: PropsWithChildren) => {
  const { children } = props;
  return <StyledFullHeightLayout>{children}</StyledFullHeightLayout>;
};

export default FullHeightLayout;

const StyledFullHeightLayout = styled.div`
  height: 100vh;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 100dvh;
  }
`;
