import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div``;

export const Inner = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileSkeletonStyles = css`
  width: 240px;
  height: 240px;
`;

// 모바일

export const UserName = styled.div`
  display: flex;
  align-items: center;
  & > span:first-of-type {
    font-size: 20px;
    font-weight: 600;
  }

  & > span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const MenuBarStyles = (theme: EmotionTheme) => css`
  @media ${theme.mediaQuery.md} {
    display: flex !important;
    justify-content: space-between;
    position: sticky;
    top: ${theme.layout.main.GNBHeight};
    width: 100%;
    padding: 16px;
    z-index: 1;
    background-color: #fff;
    border-bottom: 1px solid ${theme.colors.gray_500};
  }
`;

export const LayoutElement = styled.div`
  width: 24px;
  height: 24px;
`;
