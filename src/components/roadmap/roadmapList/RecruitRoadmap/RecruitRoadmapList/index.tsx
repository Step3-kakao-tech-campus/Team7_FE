import { useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmaps } from '@/api/hooks/roadmap';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
import EmptyList from '@/components/common/EmptyList';
import GroupCard from '@/components/roadmap/roadmapList/GroupCard';
import * as Styled from '@/components/roadmap/roadmapList/RecruitRoadmap/RecruitRoadmapList/style';
import TilyCard from '@/components/roadmap/roadmapList/TilyCard';
import TILY_LINKS from '@/constants/links';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';

const RecruitRoadmapList = () => {
  const router = useRouter();

  const { data, isLoading, fetchNextPage, hasNextPage } = useGetRoadmaps({ query: router.query });

  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage, ref]);

  return (
    <>
      <CustomSuspense isLoading={isLoading} fallback={<RoadmapSkeleton />}>
        <ConditionalRender
          data={data}
          EmptyUI={
            <EmptyList image="ic_step" button="로드맵 만들기" onClick={() => router.push(TILY_LINKS.roadmapCreate())}>
              <p>모집중인 로드맵이 없습니다.</p>
              <p>직접 로드맵을 만들고 공유해보세요!</p>
            </EmptyList>
          }>
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
      {Array(12)
        .fill(null)
        .map((_, idx) => (
          <Styled.Skeleton key={idx} />
        ))}
    </Styled.RoadmapContainer>
  );
};

export default React.memo(RecruitRoadmapList);
