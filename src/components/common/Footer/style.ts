import styled from '@emotion/styled';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  margin-top: 8rem;
  border-top: 1px solid #d2d3d4;
`;

export const Inner = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: left;
  color: hsl(240 3.8% 46.1%);

  & > a {
    text-decoration-line: underline;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    font-size: 10px;
  }
`;
