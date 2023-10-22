import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.form`
  padding: 3rem 0 3rem 6.25rem;
`;

export const EmailContainer = styled.div``;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Email = styled.div`
  border: 0.1rem solid #cbd5e1;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.125rem;
  padding: 0.9rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const SubmitContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const InputContainerStyles = css`
  margin: 0.25rem 0;
`;

export const SubmitButtonStyles = css`
  flex-shrink: 0;
  padding: 1rem;
  height: fit-content;
  font-weight: 500;
`;
