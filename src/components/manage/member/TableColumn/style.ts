import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonStyles = () => css`
  padding: 0.65rem 0.9rem;
  font-weight: 600;
`;

export const RenderUserRole = styled.div`
  width: 140px;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  font-weight: 600;
  font-size: 1rem;
  border-radius: 6px;
`;
