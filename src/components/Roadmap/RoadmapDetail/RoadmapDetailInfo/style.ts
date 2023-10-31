import styled from '@emotion/styled';

export const InfoBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray_100};

  & b {
    margin-right: 20px;
    font-size: 17px;
  }

  & img {
    margin-right: 10px;
  }
`;
