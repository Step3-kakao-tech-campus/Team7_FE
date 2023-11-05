import styled from '@emotion/styled';
import type { TextAreaProps } from './index';

type LabelTextProps = Pick<TextAreaProps, 'labelType'>;

export const LabelText = styled.div<LabelTextProps>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ labelType }) => (labelType === 'bold' ? '700' : '500')};
  font-size: ${({ labelType }) => (labelType === 'bold' ? '1.25rem' : '1.1rem')};
`;
export const TextArea = styled.textarea`
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.9rem 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.blue_gray_300};
  border-radius: 0.35rem;
  resize: none;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue_gray_300};
  }

  &:focus {
    border: ${({ theme }) => `0.1rem solid ${theme.colors.gray_700}`};
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`;
