import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  width: 100%;
  height: 9.375rem;

  padding: 1.25rem;
  cursor: pointer;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    height: auto;
  }
`;

export const badgeStyles = {
  group: () => css`
    background-color: #088906;
  `,
  individual: () => css`
    background-color: #000000;
  `,
  tily: () => css`
    background-color: #ea103c;
  `,
};

export const Badge = styled.div<{ category?: 'individual' | 'group' | 'tily' }>`
  ${({ theme, category }) => css`
    color: ${theme.colors.white};
    font-size: 0.75rem;
    padding: 0.5rem;
    width: fit-content;
    max-width: 100%;
    border-radius: 6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    ${badgeStyles[category!]()};
  `}
`;

export const Title = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
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
