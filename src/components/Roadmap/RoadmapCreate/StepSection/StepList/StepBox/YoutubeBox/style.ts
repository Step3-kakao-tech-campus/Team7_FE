import styled from '@emotion/styled';

export const Root = styled.section`
  margin-top: 1rem;
  border: ${({ theme }) => `1.5px solid ${theme.colors.gray_500}`};
  border-radius: 0.4rem 0.4rem 0 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.7rem 0.7rem 1.5rem;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.blue_gray_100};

  & > button {
    background-color: ${({ theme }) => theme.colors.gray_500};
    color: black;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding: 10px 15px;

    & > h3 {
      font-size: 16px;
    }

    & > button {
      font-size: 12px;
    }
  }
`;
