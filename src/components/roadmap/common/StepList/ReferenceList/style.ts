import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1.25rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding: 10px;
  }
`;

export const Link = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 5px;

  & > section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }

  & > img {
    cursor: pointer;
  }

  & a {
    border-bottom: 1px solid black;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.rose};
      border-color: ${({ theme }) => theme.colors.rose};
    }
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    & section > p {
      font-size: 12px;
    }
  }
`;
