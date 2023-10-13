import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const ModalInfo = styled.div`
  display: flex;
  font-size: 1.125rem;
  margin-top: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

export const CardStyles = css`
  display: flex;
  height: 23rem;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 0.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
`;
export const Right = styled.div`
  width: 50%;
  height: 100%;
  padding: 0.5rem;
`;

export const List = styled.ul`
  flex-grow: 1;
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const Item = styled.li<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.25rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  background-color: ${({ selected, theme }) => (selected ? theme.colors.rose_light : '#ffffff')};

  &:hover {
    background-color: ${({ selected, theme }) => (selected ? theme.colors.rose_light : theme.colors.gray_200)};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonStyles = css`
  width: fit-content;
`;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  height: 47px;
  margin: 0 0 0.5rem 0;
  padding: 0.75rem;
  font-size: 1rem;
  border: 0.1rem solid ${theme.colors.gray_500};
`;

export const InputStyles = () => css`
  &:focus-visible {
    outline: none;
  }
`;

export const Form = styled.form``;
