import styled from '@emotion/styled';

export const LabelText = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;
export const TextArea = styled.textarea`
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.75rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.blue_gray_300};
  border-radius: 5px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue_gray_300};
  }

  &:focus {
    border-color: #3b82f6;
  }
`;
