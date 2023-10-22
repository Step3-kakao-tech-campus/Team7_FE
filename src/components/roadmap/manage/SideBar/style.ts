import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 4px;
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
`;
