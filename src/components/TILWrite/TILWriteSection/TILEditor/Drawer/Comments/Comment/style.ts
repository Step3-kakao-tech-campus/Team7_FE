import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ContextMenu from '@/components/common/ContextMenu';

export const Root = styled.div`
  margin-bottom: 1rem;
  padding: 0.625rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  margin-left: 0.5rem;
  font-weight: 600;
`;

export const Date = styled.div`
  font-size: 0.75rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  position: relative;
`;

export const IconStyles = css`
  margin-right: 0.5rem;
`;

export const Text = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.3;
`;

export const ContextMenus = styled(ContextMenu)`
  position: absolute;
  top: 20px;
  right: 0;
`;
