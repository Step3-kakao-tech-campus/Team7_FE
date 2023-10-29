import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div<{ isLoggedIn: boolean; isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.layer.header};

  ${({ isLoggedIn, theme, isScrolled }) =>
    (isLoggedIn || isScrolled) &&
    css`
      background-color: #fff;
      border-bottom: 1px solid ${theme.colors.gray_500};
    `}

  transition: background-color 0.2s ease-in-out;
`;

export const BellowRoot = styled.div`
  height: ${({ theme }) => theme.layout.main.GNBHeight};
`;

export const Inner = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 8px;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-right: 3rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-right: 0;
  }
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const NavArea = styled.nav`
  display: flex;
  flex-grow: 1;
  font-size: 1.25rem;

  & > div:first-of-type {
    margin-right: 2.125rem;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 18px;
    margin-left: 32px;
  }
`;

export const NavItem = styled(Link)<{ active: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.75rem;
  min-width: 2.5rem;
  height: 2.5rem;
  font-weight: ${({ active }) => (active ? 700 : 400)};

  ${({ active, theme }) =>
    active &&
    css`
      border-bottom: 5px solid ${theme.colors.black};
      height: calc(2.5rem + 5px);

      @media ${theme.mediaQuery.md} {
        border-bottom: none;
        font-weight: 800;
      }
    `}

  cursor: pointer;

  @media ${({ theme }) => theme.mediaQuery.md} {
    min-width: fit-content;
    margin-right: 32px;
    height: auto;
  }
`;

export const ActionArea = styled.div`
  display: flex;
`;

export const TILInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_200};
  padding: 1.125rem;
  border-radius: 1rem;

  & > span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const TILButtonStyles = (theme: EmotionTheme) => css`
  font-size: 1.25rem;
  font-weight: 700;

  @media ${theme.mediaQuery.md} {
    margin-right: 8px;
  }
`;

export const NoticeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AlarmActiveDot = styled.div`
  position: absolute;
  top: 6px;
  right: -4px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.rose};
`;

export const ProfileSkeletonStyles = css`
  width: 40px;
  height: 40px;
`;

export const ButtonStyles = (theme: EmotionTheme) => css`
  margin-right: 6px;
  font-weight: 500;

  @media ${theme.mediaQuery.md} {
    background-color: transparent;
    font-weight: 700;
  }
`;
