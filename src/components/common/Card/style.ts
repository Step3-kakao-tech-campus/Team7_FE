import styled from '@emotion/styled';

export const Card = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 4px 10px rgba(26, 28, 29, 0.06);
  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-7px);
    box-shadow: 0 4px 10px rgba(26, 28, 29, 0.1);
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    &:hover {
      transform: none;
    }
  }
`;
