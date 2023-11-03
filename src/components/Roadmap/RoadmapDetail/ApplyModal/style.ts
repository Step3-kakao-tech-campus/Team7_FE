import styled from '@emotion/styled';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > form {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-self: flex-end;
  gap: 10px;
`;
