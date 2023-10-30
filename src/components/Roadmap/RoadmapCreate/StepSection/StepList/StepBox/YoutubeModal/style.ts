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

  @media ${({ theme }) => theme.mediaQuery.sm} {
    & > h2 {
      font-size: 20px;
    }

    & li {
      font-size: 14px;
    }

    & label > div {
      font-size: 18px;
    }

    & input {
      font-size: 14px;
    }
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-self: flex-end;
`;
