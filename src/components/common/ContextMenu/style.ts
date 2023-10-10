import styled from '@emotion/styled';

export const Root = styled.div`
  width: 7rem;
  border: ${({ theme }) => `1px solid ${theme.colors.gray_400}`};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
`;

export const Menu = styled.div`
  padding: 0.65em 0.6em;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_300};
  }
`;
