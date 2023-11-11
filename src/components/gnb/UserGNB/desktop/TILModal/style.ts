import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DesktopModalContainerStyles = css`
  width: 37.5rem;
`;

export const MobileModalContainerStyles = css`
  width: 90vw;
`;

export const CloseButtonStyles = () => css`
  top: 20px;
  right: 20px;
`;

export const ModalContentStyles = () => css`
  padding: 1.5rem 2rem;
  font-size: 1.375rem;
  font-weight: 700;
  width: 37.5rem;
`;

export const MobileModalContentStyles = () => css`
  padding: 1.5rem 2rem;
  font-size: 1.375rem;
  font-weight: 700;
  width: 100%;
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  width: fit-content;
`;

export const TabStyles = css`
  margin-top: 1.25rem;
  height: 2.5rem;
`;

export const TabMenuStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  font-size: 1.125rem;
`;

export const TabOnboardRefContainer = styled.div``;
