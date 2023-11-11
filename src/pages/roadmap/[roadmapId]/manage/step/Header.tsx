export const Header = styled.h2`
  margin-bottom: 15px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin: 0;
    font-size: 0;
    visibility: hidden;
  }
`;
