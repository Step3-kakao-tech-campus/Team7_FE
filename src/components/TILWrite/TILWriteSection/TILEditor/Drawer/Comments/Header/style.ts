import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
`;

export const Comment = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  cursor: pointer;
`;
