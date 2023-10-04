import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { InputProps } from './index';

type LabelTextProps = Pick<InputProps, 'labelType'>;
type InputStateProps = Pick<InputProps, 'status' | 'disabled'>;

export const Label = styled.label`
  width: 100%;
  display: block;
`;

export const LabelText = styled.div<LabelTextProps>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ labelType }) => (labelType === 'bold' ? '700' : '500')};
  font-size: ${({ labelType }) => labelType === 'bold' && '1.25rem'};
`;

export const InputContainer = styled.div<InputStateProps>`
  ${({ theme, status, disabled }) => css`
    display: flex;
    width: 100%;
    margin: 0.25rem 0;
    padding: 0.75rem 0.4rem;
    border-radius: 0.35rem;
    border: 0.1rem solid ${theme.colors.black};

    border-color: ${status === 'error' ? theme.colors.red : theme.colors.blue_gray_300};

    &:focus-within {
      // 내부의 어떤 자식 요소가 포커스를 받았을 때 해당 요소 자체에 스타일을 적용
      border: 0.1rem solid ${theme.colors.black};
    }

    ${disabled &&
    css`
      color: ${theme.colors.blue_gray_300};
      background-color: ${theme.colors.gray_100};
    `}
  `}
`;

export const Input = styled.input`
  &::placeholder {
    color: ${({ theme }) => theme.colors.blue_gray_300};
  }

  width: 100%;
  background-color: transparent;
  font-size: inherit;
  border: none;
  outline: none;
`;

export const Message = styled.p`
  margin: 0;
  padding-left: 0.25rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
`;

export const ButtonContainer = styled.button`
  cursor: pointer;
`;
