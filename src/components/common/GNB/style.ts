import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.layer.header};
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

export const BellowRoot = styled.div`
  height: ${({ theme }) => theme.layout.headerHeight};
`;

export const Inner = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-right: 3rem;
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
`;

export const NavItem = styled(Link)<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.75rem;
  min-width: 2.5rem;
  height: 2.5rem;
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-bottom: 5px solid ${theme.colors.black};
      height: calc(2.5rem + 5px);
    `}

  cursor: pointer;
`;

export const ActionArea = styled.div`
  display: flex;
`;

export const TILInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_200};
  padding: 1.125rem;
  border-radius: 1rem;
  margin-right: 1rem;

  & > span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const TILButtonStyles = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 1rem;
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
