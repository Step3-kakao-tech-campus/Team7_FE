import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-right: 2.5rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-right: 0;
  }
`;
