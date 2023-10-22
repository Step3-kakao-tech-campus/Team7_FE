import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  width: 100%;
  padding: 1rem;

  cursor: pointer;
`;

export const Header = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const Body = styled.p`
  display: -webkit-box;
  margin-top: 10px;
  line-height: 1.5;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: 48px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.gray_900};
  font-weight: 600;
  gap: 4px;
  font-size: 0.875rem;
`;

export const TILInfoContainer = styled.div``;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
