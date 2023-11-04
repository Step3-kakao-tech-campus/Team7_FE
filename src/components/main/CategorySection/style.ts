import styled from '@emotion/styled';

export const CategoryTitle = styled.h3`
  width: fit-content;
  margin-top: 1.5rem;

  font-size: 1.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.black};
`;

export const CollapsibleContainer = styled.div`
  & > button {
    margin-top: 1.5rem;
  }
`;

export const ShowAllButton = styled.button`
  width: 16rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;

  margin-top: 1.5rem;
  cursor: pointer;
`;

export const Item = styled.button`
  width: 14rem;
  display: block;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
