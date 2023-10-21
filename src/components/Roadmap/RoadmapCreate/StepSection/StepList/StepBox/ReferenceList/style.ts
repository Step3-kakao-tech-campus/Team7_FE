import styled from '@emotion/styled';

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1.25rem;
  width: 100%;
`;

export const Link = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 5px;

  & > section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > img {
    cursor: pointer;
  }
`;
