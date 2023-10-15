import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const ModalContainerStyles = () => css`
  width: 27.5rem;
  padding: 0;
`;

export const ModalTitle = styled.h3`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const ModalContentStyles = () => css`
  width: 27.5rem;
  padding: 2rem 2rem 1.5rem 2rem;
  font-size: 1.375rem;
  font-weight: 700;
`;

export const TextAreaStyles = (theme: EmotionTheme) => css`
  margin-top: 1rem;
  font-size: 1rem;

  &:focus {
    border-color: ${theme.colors.blue_gray_300};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Container = styled.form``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

export const CancelButtonStyles = css`
  font-weight: 600;
  font-size: 0.875rem;
`;

export const ConfirmButtonStyles = css`
  font-weight: 600;
  font-size: 0.875rem;
`;
