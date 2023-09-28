import styled from '@emotion/styled';
import type { InputProps } from './index';

type LabelTextProps = Pick<InputProps, 'labelType'>;
type StyledInputProps = Pick<InputProps, 'status'>;

export const Label = styled.label`
  display: block;
`;

export const LabelText = styled.div<LabelTextProps>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ labelType }) => (labelType === 'bold' ? '700' : '500')};
  font-size: ${({ labelType }) => labelType === 'bold' && '1.25rem'};
`;

export const Input = styled.input<StyledInputProps>`
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.75rem 0.4rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ status, theme }) => (status === 'error' ? theme.colors.red : theme.colors.blue_gray_300)};
  border-radius: 0.35rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue_gray_300};
  }

  &:focus {
    border-color: #3b82f6;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.blue_gray_300};
  }
`;

export const Message = styled.p`
  margin: 0;
  padding-left: 0.25rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
`;
