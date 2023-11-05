import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  width: 16.875rem;
  height: 9.375rem;

  padding: 1.25rem;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    height: auto;
  }
`;

export const Badge = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: 0.75rem;
    padding: 0.5rem;
    width: fit-content;
    border-radius: 6px;
  `}
`;

export const Title = styled.h4`
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 600;
  width: fit-content;
  border-radius: 6px;
  line-height: 1.5;
  min-height: 2.9rem;
`;

export const Date = styled.div`
  ${({ theme }) => css`
    font-size: 0.75rem;
    color: ${theme.colors.gray_900};
    margin-top: 0.5rem;
  `}
`;
