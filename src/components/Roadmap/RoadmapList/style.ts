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
`;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  width: 275px;
  font-size: 16px;
  border-radius: 100px;
  padding: 7px 14px;
`;
