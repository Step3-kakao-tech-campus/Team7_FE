import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 230px;
  margin: 20px auto;
  padding: 12px 0 10px;
  cursor: pointer;

  & > section:first-of-type > * {
    margin-bottom: 7px;
  }

  & > section:first-of-type {
    height: 55%;
  }

  & > section > section > h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;

export const Container = styled.section`
  padding: 0 10px;

  & > p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray_700};
  }
`;
