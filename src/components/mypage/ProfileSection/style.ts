import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    justify-content: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  margin-left: 40px;
  font-size: 2rem;
  font-weight: 700;
`;

export const Honorific = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;
