import styled from '@emotion/styled';
import SkeletonBox from '@/components/common/Skeleton';

export const RoadmapContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media ${({ theme }) => theme.mediaQuery.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;

export const Skeleton = styled(SkeletonBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 230px;
  margin: 20px auto;
  padding: 16px 12px 10px;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px auto 55px;

  & > section > p {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;
