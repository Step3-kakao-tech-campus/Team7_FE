import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-self: flex-end;
`;
