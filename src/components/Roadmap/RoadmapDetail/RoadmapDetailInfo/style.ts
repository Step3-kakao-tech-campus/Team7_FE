import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 15px;

  & > div > h1 {
    overflow-wrap: anywhere;
  }

  & > div > button {
    flex-shrink: 0;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    gap: 20px;

    & > div > h1 {
      font-size: 22px;
    }

    & > div > button {
      font-size: 14px;
    }
  }
`;

export const InfoBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray_100};

  & b {
    margin-right: 20px;
    font-size: 17px;
  }

  & img {
    margin-right: 10px;
  }
`;
