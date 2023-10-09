import styled from '@emotion/styled';

export const Root = styled.section``;

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  background-color: white;
  border-bottom: ${({ theme }) => theme.colors.gray_500} 1px solid;
`;

export const RoadMap = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 400;
`;
