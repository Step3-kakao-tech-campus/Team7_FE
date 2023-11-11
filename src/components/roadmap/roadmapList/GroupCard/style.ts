import styled from '@emotion/styled';
import Card from '@/components/common/Card';
import Flex from '@/components/common/Flex';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 230px;
  margin: 20px auto;
  padding: 16px 12px 10px;
  cursor: pointer;
  overflow: hidden;

  & h3 {
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }

  & > section > p {
    height: 70px;
    color: ${({ theme }) => theme.colors.gray_700};
    font-size: 14px;
    line-height: 1.3;
    word-wrap: break-word;
    overflow: hidden;

    @media ${({ theme }) => theme.mediaQuery.sm} {
      height: 55px;
    }
  }

  & > section > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    padding-top: 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray_300};

    & > span {
      color: ${({ theme }) => theme.colors.gray_900};
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const RoadmapEdit = styled(Flex)`
  padding: 2px 8px;
  background-color: #088906;
  border-radius: 8px;
  color: white;

  & > span {
    font-size: 12px;
    font-weight: 600;
  }

  &:hover {
    color: black;
    transition: all 0.2s ease;
  }
`;
