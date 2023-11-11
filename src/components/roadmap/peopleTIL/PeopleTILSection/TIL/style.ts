import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  max-width: 20.875rem;
  padding: 1rem 1.375rem;

  cursor: pointer;
`;

export const Header = styled.h2`
  display: flex;
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const Date = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray_900};
  font-weight: 600;
`;

export const Body = styled.p`
  display: -webkit-box;
  max-width: 288px;
  margin-top: 10px;
  line-height: 1.5;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  height: 72px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.gray_900};
  font-weight: 600;
  gap: 4px;
  font-size: 0.875rem;
`;
