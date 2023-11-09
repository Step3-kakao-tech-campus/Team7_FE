import styled from '@emotion/styled';

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 70px auto 55px;

  & > section > p {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;
