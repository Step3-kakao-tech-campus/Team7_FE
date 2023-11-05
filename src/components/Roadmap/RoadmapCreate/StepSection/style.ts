import styled from '@emotion/styled';

export const HeaderTitle = styled.h2`
  font-size: 1.75rem;
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1rem;

  & > button {
    background-color: ${({ theme }) => theme.colors.gray_500};
    color: black;
    font-weight: 600;
  }
`;
