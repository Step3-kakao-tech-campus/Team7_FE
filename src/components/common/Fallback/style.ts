import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  margin-top: 0.75rem;
  font-size: 1.375rem;
  font-weight: 600;
`;

export const ButtonStyles = css`
  width: 180px;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.125rem;
`;
