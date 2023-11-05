import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  margin-right: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  font-weight: ${({ active }) => (active ? 400 : 400)};
  color: ${({ active, theme }) => (active ? theme.colors.black : theme.colors.gray_900)};

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
    margin-right: 20px;
    height: auto;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
