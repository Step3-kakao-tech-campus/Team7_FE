import styled from '@emotion/styled';

export const RegisterFormRoot = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  & > label {
    margin-bottom: 0.8rem;
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;

  & > * {
    padding: 0.5rem 1.2rem;
  }

  & > a {
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  & > a {
    margin-top: 2px;
  }
`;
