import styled from '@emotion/styled';
import SkeletonBox from '@/components/common/Skeleton';

export const RoadmapContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;

export const Skeleton = styled(SkeletonBox)`
  width: 211px;
  height: 230px;
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 55px auto 55px;
`;
