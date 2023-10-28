import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  gap: 4px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 8px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    width: 100%;
    justify-content: space-between;
    padding: 8px;
  }
`;

export const NavItem = styled(Link)<{ active?: number }>`
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0.7rem;
  border-radius: 8px;

  ${({ active, theme }) => css`
    background-color: ${active ? theme.colors.rose_light : 'transparent'};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    font-size: 16px;
  }
`;
