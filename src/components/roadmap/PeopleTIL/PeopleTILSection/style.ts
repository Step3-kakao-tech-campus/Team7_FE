import styled from '@emotion/styled';

export const Root = styled.section`
  width: 100%;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 48px;
  column-gap: 32px;
`;
