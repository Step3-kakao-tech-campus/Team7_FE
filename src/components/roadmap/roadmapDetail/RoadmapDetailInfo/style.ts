import styled from '@emotion/styled';

export const RoadmapDetailInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 15px;

  & > section > h1 {
    width: calc(100% - 240px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    & > section {
      flex-direction: column;
    }

    & > section > h1 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      width: 100%;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & > section > section {
      width: 100%;
    }

    & button {
      width: 100%;
    }
  }
`;

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
