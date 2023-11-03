import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  margin: 0 auto;
  padding: 20px 10px 10px;
  cursor: pointer;
  overflow: hidden;
  word-wrap: break-word;

  & > section > p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray_700};
  }

  & > section > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray_300};

    & > span {
      color: ${({ theme }) => theme.colors.gray_900};
      font-size: 14px;
      font-weight: 700;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;
