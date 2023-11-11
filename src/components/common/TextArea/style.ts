import styled from '@emotion/styled';
import type { TextAreaProps } from './index';

type LabelTextProps = Pick<TextAreaProps, 'labelType'>;
type TextAreaStateProps = Pick<TextAreaProps, 'status'>;

export const LabelText = styled.p<LabelTextProps>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ labelType }) => (labelType === 'bold' ? '600' : '500')};
  font-size: ${({ labelType }) => (labelType === 'bold' ? '18.72px' : '1.1rem')};
  font-size: ${({ labelType }) => labelType === 'none' && '0'};
`;
export const TextArea = styled.textarea<TextAreaStateProps>`
  width: 100%;
  margin-top: 8px;
  padding: 0.9rem 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.blue_gray_300};
  border-radius: 0.35rem;
  resize: none;
  transition: all 0.2s;
  border: ${({ theme, status }) =>
    status === 'error' ? `0.1rem solid ${theme.colors.red}` : `0.1rem solid ${theme.colors.blue_gray_300}`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue_gray_300};
  }

  &:focus {
    border: ${({ theme }) => `0.1rem solid ${theme.colors.gray_700}`};
    background-color: ${({ theme }) => theme.colors.gray_100};
  }

  &:focus-visible {
    outline: none !important;
  }
`;

export const Message = styled.p`
  margin: 0;
  padding-left: 0.25rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
`;
