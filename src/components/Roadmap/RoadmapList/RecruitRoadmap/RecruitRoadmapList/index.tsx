import { useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetRoadmaps } from '@/api/hooks/roadmap';
import GroupCard from '@/components/Roadmap/RoadmapList/GroupCard';
import * as Styled from '@/components/Roadmap/RoadmapList/RecruitRoadmap/RecruitRoadmapList/style';
import TilyCard from '@/components/Roadmap/RoadmapList/TilyCard';
import Button from '@/components/common/Button';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
import Flex from '@/components/common/Flex';
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
      {Array(12)
        .fill(null)
        .map((idx) => (
          <Styled.Skeleton key={idx} />
        ))}
    </Styled.RoadmapContainer>
  );
};

const EmptyRecruitRoadmap = () => {
  const router = useRouter();
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="참여중인 로드맵이 없음" width={60} height={60} />
      <Flex dir="col" gap={0.3}>
        <p>모집중인 로드맵이 없습니다.</p>
        <p>직접 로드맵을 만들고 공유해보세요!</p>
      </Flex>
      <Button onClick={() => router.push(TILY_LINKS.roadmapCreate())}>로드맵 만들기</Button>
    </Styled.EmptyRoot>
  );
};

export default React.memo(RecruitRoadmapList);
