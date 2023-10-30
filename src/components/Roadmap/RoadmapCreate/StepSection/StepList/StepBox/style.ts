import styled from '@emotion/styled';

export const StepContainer = styled.article``;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray_500}`};
  background-color: ${({ theme }) => theme.colors.blue_gray_100};

  & img {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex-direction: column;
    padding: 10px;
  }
`;

export const TitleContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & > h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    align-self: flex-start;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 14px;
  & > section {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
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

  @media ${({ theme }) => theme.mediaQuery.sm} {
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
