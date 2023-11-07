import styled from '@emotion/styled';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & li {
      font-size: 13px;
    }
  }
`;

export const Label = styled.label`
  margin-top: 1.125rem;
  font-weight: 600;

  & > * {
    margin-top: 0.75rem;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-self: flex-end;
`;
