import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.form`
  padding: 3rem 0;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 3rem 0;
  }
`;

export const EmailContainer = styled.div``;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 18px;
  }
`;

export const Email = styled.div`
  border: 0.1rem solid #cbd5e1;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.125rem;
  padding: 0.9rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray_100};

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 16px;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const SubmitContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  margin: 0.25rem 0;

  @media ${theme.mediaQuery.md} {
    padding: 12px 8px;
  }
`;

export const InputStyles = (theme: EmotionTheme) => css`
  @media ${theme.mediaQuery.md} {
    font-size: 16px;
  }
`;

export const SubmitButtonStyles = (theme: EmotionTheme) => css`
  flex-shrink: 0;
  margin: 0.25rem 0;
  padding: 1rem;
  height: fit-content;
  font-weight: 500;

  @media ${theme.mediaQuery.md} {
    padding: 14px;
  }
`;
