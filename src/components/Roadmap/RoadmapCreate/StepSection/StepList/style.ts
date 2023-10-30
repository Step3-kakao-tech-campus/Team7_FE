import styled from '@emotion/styled';

export const Root = styled.section``;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 1.25rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & > h3 {
      font-size: 16px;
    }
  }
`;
