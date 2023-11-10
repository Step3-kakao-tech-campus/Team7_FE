import styled from '@emotion/styled';

export const Root = styled.section``;

export const CategoryTitle = styled.h2`
  width: fit-content;
  margin-top: 1.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
`;

export const CollapsibleContainer = styled.div`
  background-color: #fff;

  & > button {
    margin-top: 1.5rem;
  }
`;

export const ShowAllButton = styled.button`
  width: 16rem;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
`;

export const Item = styled.button`
  display: block;
  width: 14rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
