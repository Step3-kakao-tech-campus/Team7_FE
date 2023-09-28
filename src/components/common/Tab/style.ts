import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  padding: 0.25em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  color: ${({ theme }) => theme.colors.gray_700};
  text-align: center;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const Menu = styled.div`
  width: 50%;
  padding: 0.25em;
  border-radius: 3px;

  cursor: pointer;

  &.selected {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
    background-color: white;
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
