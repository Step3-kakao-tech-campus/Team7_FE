import styled from '@emotion/styled';

export const Root = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

export const Reference = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  margin-top: 1.375rem;
`;

export const FallbackRoot = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 1.25rem;
  width: 100%;
  margin: auto 0;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & > h3 {
      font-size: 16px;
    }
  }
`;
