import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  margin: 0 auto;
  padding: 16px 12px 10px;
  cursor: pointer;
  overflow: hidden;
  word-wrap: break-word;

  & > p {
    font-size: 16px;
    line-height: 1.3;
    display: -webkit-box;
    width: 100%;
    font-size: 16px;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    height: 60px;

    @media ${({ theme }) => theme.mediaQuery.xs} {
      -webkit-line-clamp: 2;
      height: 40px;
    }
  }

  & > section > p {
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

  & > h5 {
    display: -webkit-box;
    width: 100%;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 600;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    height: 44px;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;
