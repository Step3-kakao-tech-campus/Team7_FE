import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div<{ isActiveStep: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  margin: 3px 0;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme, isActiveStep }) => isActiveStep && theme.colors.rose_light};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isActiveStep }) => (isActiveStep ? theme.colors.rose_light : theme.colors.gray_300)};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  overflow: hidden;
`;

export const CheckIconContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Title = styled.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    max-width: 80vw;
  }
`;

export const ButtonStyles = css`
  padding: 10px;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: white;
  }
`;
