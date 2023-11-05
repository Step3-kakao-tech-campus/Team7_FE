import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 0 0 3rem 0;
  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ButtonStyles = css`
  padding: 0.625rem 0.75rem;
`;
