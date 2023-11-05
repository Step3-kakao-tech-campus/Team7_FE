import styled from '@emotion/styled';

export const Root = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, auto);
  padding: 16px 0;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 16px 16px 16px;
    grid-template-columns: 1fr;
  }
`;

// TILSection.Empty;

export const EmptyRoot = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  margin-right: 1rem;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;

  & > span:first-of-type {
    font-weight: 700;
    font-size: 1.375rem;
  }
`;
