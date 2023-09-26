import styled from '@emotion/styled';

interface InputProps {
  status?: 'error' | 'default';
}

export const Root = styled.div``;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

export const InputField = styled.input<InputProps>`
  width: 300px;
  height: 25px;
  margin: 0.4rem 0 0.2rem 0;
  padding: 1.25rem 0.4rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ status, theme }) => (status === 'error' ? '#dc2626' : theme.colors.blue_gray_300)};
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
  padding-left: 0.25rem;
  color: #dc2626;
  font-size: 0.75rem;
`;
