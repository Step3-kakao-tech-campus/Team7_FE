import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetRoadmaps } from '@/api/hooks/roadmap';
import GroupCard from '@/components/Roadmap/GroupCard';
import * as Styled from '@/components/Roadmap/RecruitRoadmap/RecruitRoadmapList/style';
import TilyCard from '@/components/Roadmap/TilyCard';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';

const RecruitRoadmapList = () => {
  const router = useRouter();
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetRoadmaps(router.query);

  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage, ref]);

  return (
    <>
      <CustomSuspense isLoading={isLoading} fallback={<RoadmapSkeleton />}>
        <ConditionalRender data={data} EmptyUI={<EmptyRecruitRoadmap />}>
          <Styled.RoadmapContainer>
            {router.query.category === 'tily'
              ? data?.map((roadmap) => <TilyCard key={roadmap.id} roadmap={roadmap} />)
              : data?.map((roadmap) => <GroupCard key={roadmap.id} roadmap={roadmap} />)}
          </Styled.RoadmapContainer>
        </ConditionalRender>
      </CustomSuspense>
      <Styled.ObserverInterSectionTarget ref={ref} />
    </>
  );
};

const RoadmapSkeleton = () => {
  return (
    <Styled.RoadmapContainer>
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
      <Styled.Skeleton />
    </Styled.RoadmapContainer>
  );
};

const EmptyRecruitRoadmap = () => {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="빈 로드맵" width={60} height={60} />
      <h3>모집중인 로드맵이 없습니다.</h3>
    </Styled.EmptyRoot>
  );
};

export default RecruitRoadmapList;
