import styled from '@emotion/styled';

export const TextAreaContainer = styled.form`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: 1rem 1rem 0.8rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

export const Container = styled.div`
  flex: 1;
  margin-right: 0.75rem;
  height: 100%;
`;
