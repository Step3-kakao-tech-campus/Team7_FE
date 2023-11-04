import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 211px;
  height: 230px;
  margin: 0 auto;
  padding: 10px;
  cursor: pointer;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  & > section > * {
    margin-bottom: 7px;
  }

  & > p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray_700};
  }

  & > h5 {
    font-size: 18px;
  }
`;
