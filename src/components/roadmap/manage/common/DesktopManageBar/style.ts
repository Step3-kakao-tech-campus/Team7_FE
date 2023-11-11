import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.layout.main.GNBHeight};
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0 30px;
  gap: 3px;
`;

export const NavItem = styled(Link)<{ active?: number }>`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;

  ${({ active, theme }) => css`
    background-color: ${active ? theme.colors.rose_light : 'transparent'};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }
`;
