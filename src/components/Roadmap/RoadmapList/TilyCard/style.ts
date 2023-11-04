import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  margin: 0 auto;
  padding: 10px 0;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(26, 28, 29, 0.06);

  & > section > * {
    margin-bottom: 7px;
  }
`;

export const Container = styled.div`
  padding: 0 10px;

  & > p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray_700};
  }

  & > h5 {
    font-size: 16px;
  }
`;
