import styled from '@emotion/styled';

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 101vh;
  padding: 2.5rem 0 0 4rem;

  @media (max-width: 1440px) {
    padding: 3.5rem 4.5rem 0 4.5rem;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 20px;
  }
`;
