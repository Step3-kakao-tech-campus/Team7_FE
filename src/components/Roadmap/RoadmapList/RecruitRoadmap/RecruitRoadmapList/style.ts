import styled from '@emotion/styled';
import SkeletonBox from '@/components/common/Skeleton';

export const RoadmapContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 40px;
  padding-top: 26px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    padding-top: 16px;
  }
`;

export const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;

export const Skeleton = styled(SkeletonBox)`
  width: 100%;
  height: 230px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 110px auto 55px;
`;
