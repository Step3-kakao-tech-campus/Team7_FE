import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NoticeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AlarmActiveDot = styled.div`
  position: absolute;
  top: 6px;
  right: -4px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.rose};
`;

export const ProfileSkeletonStyles = css`
  width: 40px;
  height: 40px;
`;
