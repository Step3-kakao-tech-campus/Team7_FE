import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    margin-top: 20px;

    & > h1 {
      font-size: 25px;
    }

    & > button {
      font-size: 14px;
    }
  }
`;

export const RadioContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1rem;
  margin-top: 0.7rem;
`;
