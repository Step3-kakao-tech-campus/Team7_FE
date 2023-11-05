import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #fff;
  @media ${({ theme }) => theme.mediaQuery.md} {
    position: sticky;
    top: 125px;
    padding-bottom: 16px;
  }
`;

export const MainSearchContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 16px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    border-top: 1px solid ${({ theme }) => theme.colors.gray_500};
    padding: 8px;
    column-gap: 16px;
    row-gap: 12px;
  }

  @media ${({ theme }) => theme.mediaQuery.xxs} {
    grid-template-columns: 200px 1fr;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 16px;
    margin-top: 4px;
  }
`;

export const TILCount = styled.div`
  font-weight: 600;
  padding-left: 4px;
`;
