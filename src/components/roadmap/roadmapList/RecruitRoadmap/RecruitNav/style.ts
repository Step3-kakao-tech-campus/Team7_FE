import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: column-reverse;

    & > form {
      width: 100%;
      margin-bottom: 20px;
    }

    & > div {
      width: 100%;
    }
  }
`;

export const SearchInput = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 1px solid ${theme.colors.gray_400};
  width: 275px;
  font-size: 16px;
  border-radius: 100px;
  padding: 8px 14px;

  @media (max-width: 760px) {
    width: 100%;
  }
`;
