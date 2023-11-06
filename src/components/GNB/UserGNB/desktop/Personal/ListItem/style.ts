import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.li<{ selected?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  margin-bottom: 0.25rem;
  padding: 12px 10px 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  background-color: ${({ selected, theme }) => (selected ? theme.colors.rose_light : 'transparent')};

  &:hover {
    background-color: ${({ selected, theme }) => (selected ? theme.colors.rose_light : theme.colors.gray_200)};
  }
`;

export const Content = styled.div`
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
`;

export const EditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Popover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: absolute;
  bottom: 0px;
  right: 1px;
  width: 96px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 6px;
`;

export const ButtonStyles = css`
  font-size: 12px;
  padding: 8px;
`;

export const Form = styled.form``;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  height: 44px;
  margin: 0 0 0.25rem 0;
  padding: 0.75rem;
  font-size: 1rem;
  border: 0.1rem solid ${theme.colors.gray_500};
`;

export const InputStyles = () => css`
  width: 86%;
  &:focus-visible {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
