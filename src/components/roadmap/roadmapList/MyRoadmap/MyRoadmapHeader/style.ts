import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;

  & > h2 {
    font-size: 0;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    margin-bottom: 15px;

    & > button {
      width: 100%;
      padding: 8px;
    }
  }
`;
