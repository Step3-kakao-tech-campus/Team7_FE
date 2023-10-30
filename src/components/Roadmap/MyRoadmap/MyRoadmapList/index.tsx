import Image from 'next/image';
import { useGetRoadmapsMyList } from '@/api/hooks/roadmap';
import GroupCard from '@/components/Roadmap/GroupCard';
import * as Styled from '@/components/Roadmap/MyRoadmap/MyRoadmapList/style';
import TilyCard from '@/components/Roadmap/TilyCard';
import CustomSuspense from '@/components/common/CustomSuspense';
import Responsive from '@/components/common/Responsive';

const Slider = () => {
  const { roadmaps, isLoading: isRoadmapLoading } = useGetRoadmapsMyList();

  if (roadmaps?.groups.length === 0 && roadmaps?.tilys.length === 0) {
    return <EmptyMyRoadmap />;
  }

  return (
    <CustomSuspense isLoading={isRoadmapLoading} fallback={<MyRoadmapSkeleton />}>
      <Styled.Slider {...setting}>
        {roadmaps?.groups.map((roadmap, idx) => <GroupCard key={idx} roadmap={roadmap} />)}
        {roadmaps?.tilys.map((roadmap) => <TilyCard key={roadmap.id} roadmap={roadmap} />)}
      </Styled.Slider>
    </CustomSuspense>
  );
};

const MyRoadmapSkeleton = () => {
  return (
    <>
      {' '}
      <Responsive device="desktop">
        <Styled.SkeletonRoot>
          <Styled.Skeleton />
          <Styled.Skeleton />
          <Styled.Skeleton />
          <Styled.Skeleton />
        </Styled.SkeletonRoot>
      </Responsive>
      <Responsive device="mobile">
        <Styled.SkeletonRoot>
          <Styled.Skeleton />
        </Styled.SkeletonRoot>
      </Responsive>
    </>
  );
};

const EmptyMyRoadmap = () => {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="빈 로드맵" width={60} height={60} />
      <h3>참여중인 로드맵이 없습니다.</h3>
    </Styled.EmptyRoot>
  );
};

const setting = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default Slider;
