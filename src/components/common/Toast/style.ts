import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div<{ isError: boolean; position?: string }>`
  padding: 1.25rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ isError }) => (isError ? `#ff5555` : '#09090b')};
  color: #fff;
  font-weight: 400;
  box-shadow:
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -4px rgba(16, 24, 40, 0.1);

  ${({ position, theme }) => css`
    ${position === 'bottom' &&
    css`
      width: 50%;

      @media ${theme.mediaQuery.xs} {
        width: 70%;
      }
    `}

    ${position === 'right' &&
    css`
      width: 20%;
      background-color: #06bc0b;

      @media ${theme.mediaQuery.xs} {
        width: 50%;
      }
    `}
  `};
`;
