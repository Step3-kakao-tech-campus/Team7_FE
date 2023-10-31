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

  & > section > * {
    margin-bottom: 7px;
  }

  & > p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray_700};
  }
`;
