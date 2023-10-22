import styled from '@emotion/styled';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  & > tr {
    border-top: ${({ theme }) => `1px solid ${theme.colors.tableGray}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.tableGray}`};
  }

  & > tr > th {
    padding: 1rem;
  }

  & > tr > th:first-of-type {
    padding-left: 3.75rem;
    text-align: start;
  }

  & > tr > th:nth-of-type(2) {
    text-align: start;
    width: 10rem;
  }

  & > tr > th:nth-of-type(3) {
    text-align: start;
    width: 3.75rem;
  }
`;

export const TableBody = styled.tbody`
  font-size: 1.125rem;
  font-weight: 600;

  & > tr {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.tableGray}`};
  }

  & > tr > td {
    padding: 1rem 0;
  }

  & > tr > td:first-of-type {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;
