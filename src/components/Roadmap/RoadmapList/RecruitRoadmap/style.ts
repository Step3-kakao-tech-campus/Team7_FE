import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div`
  & > h2 {
    font-size: 28px;
    margin-bottom: 16px;

    @media ${({ theme }) => theme.mediaQuery.sm} {
      font-size: 20px;
      margin-bottom: 4px;
    }
  }
`;

export const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex-direction: column-reverse;

    & > div {
      width: 90%;
    }

    & > form {
      width: 90%;
      margin-bottom: 20px;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & > div {
      width: 100%;
    }

    & > form {
      width: 100%;
    }
  }
`;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_300};
  width: 275px;
  font-size: 16px;
  border-radius: 100px;
  padding: 8px 14px;
  box-shadow: 0 4px 10px rgba(26, 28, 29, 0.06);

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const TabStyles = css`
  box-shadow: 0 4px 10px rgba(26, 28, 29, 0.06);
`;

export const TabMenuStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 16px;
`;
