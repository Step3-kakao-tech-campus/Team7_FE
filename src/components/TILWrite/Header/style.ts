import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  align-items: center;

  padding: 0 1.5rem;

  background-color: ${({ theme }) => theme.colors.gray_100};
  width: 100%;
  height: ${({ theme }) => theme.layout.headerHeight};
`;

export const Title = styled.h1`
  flex: 1;
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  gap: 1.3rem;
`;
