import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  background-color: ${({ theme }) => theme.colors.gray_100};
  width: 100%;
  height: 4rem;
`;

export const Title = styled.h1`
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonStyles = css`
  font-size: 1.125rem;
  font-weight: 600;
  gap: 0.5rem;
`;

export const ExitContainer = styled.button`
  display: flex;
  cursor: pointer;
`;
