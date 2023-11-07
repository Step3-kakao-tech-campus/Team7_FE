import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  min-height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

export const ProfileSkeletonStyles = css`
  width: 240px;
  height: 240px;
`;
