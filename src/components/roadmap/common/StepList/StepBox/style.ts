import styled from '@emotion/styled';

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray_500}`};
  background-color: ${({ theme }) => theme.colors.blue_gray_100};

  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: column;
    padding: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_gray_200};
    transition: all 0.2s;
  }
`;

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: calc(100% - 300px);
  cursor: pointer;

  & > h3 {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    align-self: flex-start;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;

  & > section {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & > section:nth-of-type(1) {
    width: 230px;
  }

  & > section > img {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    justify-content: space-between;

    & > section:nth-of-type(1) {
      margin: 12px 0 0 27px;

      & > b,
      p {
        font-size: 14px;
      }
    }
  }
`;

export const ContentContainer = styled.section`
  padding: 1.2rem 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 15px 10px;
  }
`;

export const DeleteModalRoot = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DeleteModalButtonContainer = styled.section`
  display: flex;
  align-self: flex-end;

  & > button:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
