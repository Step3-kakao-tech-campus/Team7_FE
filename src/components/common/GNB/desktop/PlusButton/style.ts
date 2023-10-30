import styled from '@emotion/styled';

export const PlusButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  border-radius: 6px;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray_500};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  font-size: 1rem;
  font-weight: 700;
`;
