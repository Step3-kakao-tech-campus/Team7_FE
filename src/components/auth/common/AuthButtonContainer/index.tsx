import styled from '@emotion/styled';

const AuthButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;

  & > * {
    padding: 0.5rem 1.2rem;
  }

  & > a {
    font-weight: 600;
    margin-top: 2px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default AuthButtonContainer;
