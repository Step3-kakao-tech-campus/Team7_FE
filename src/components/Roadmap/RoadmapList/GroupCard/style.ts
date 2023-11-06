import styled from '@emotion/styled';
import Card from '@/components/common/Card';
import Flex from '@/components/common/Flex';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  margin: 0 auto;
  padding: 16px 12px 10px;
  cursor: pointer;
  max-width: 240px;

  @media ${({ theme }) => theme.mediaQuery.lg} {
    max-width: 250px;
  }

  & > section > h5 {
    width: 100%;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
  }

  & > section > p {
    line-height: 1.3;
    display: -webkit-box;
    width: 100%;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    height: 60px;
    color: ${({ theme }) => theme.colors.gray_700};

    @media ${({ theme }) => theme.mediaQuery.xs} {
      -webkit-line-clamp: 2;
      height: 40px;
    }
  }

  & > section > div > span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray_700};
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
      font-weight: 700;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;

export const RoadmapEdit = styled(Flex)`
  padding: 2px 8px;
  background-color: #09b707;
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
