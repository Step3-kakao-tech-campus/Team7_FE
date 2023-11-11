import { useGetRoadmapsMyList } from '@/api/hooks/roadmap';
import CustomSuspense from '@/components/common/CustomSuspense';
import EmptyList from '@/components/common/EmptyList';
import Responsive from '@/components/common/Responsive';
import GroupCard from '@/components/roadmap/roadmapList/GroupCard';
import * as Styled from '@/components/roadmap/roadmapList/MyRoadmap/MyRoadmapList/style';
import TilyCard from '@/components/roadmap/roadmapList/TilyCard';

const MyRoadmapList = () => {
  const { tilys, groups, isLoading } = useGetRoadmapsMyList();

  if (groups?.length === 0 && tilys?.length === 0) {
    return (
      <EmptyList image="ic_step">
        <p>참여중인 로드맵이 없습니다.</p>
        <p>관심있는 로드맵을 찾아 가입해보세요!</p>
      </EmptyList>
    );
  }

  return (
    <CustomSuspense isLoading={isLoading} fallback={<MyRoadmapListSkeleton />}>
      <Styled.Slider {...setting}>
        {groups?.map((roadmap, idx) => <GroupCard key={idx} roadmap={roadmap} />)}
        {tilys?.map((roadmap) => <TilyCard key={roadmap.id} roadmap={roadmap} />)}
      </Styled.Slider>
    </CustomSuspense>
  );
};

const MyRoadmapListSkeleton = () => {
  return (
    <>
      <Responsive device="desktop">
        <Styled.SkeletonRoot gap={2}>
          {Array(4)
            .fill(null)
            .map((_, idx) => (
              <Styled.Skeleton key={idx} />
            ))}
        </Styled.SkeletonRoot>
      </Responsive>
      <Responsive device="mobile">
        <Styled.SkeletonRoot>
          {Array(2)
            .fill(null)
            .map((_, idx) => (
              <Styled.Skeleton key={idx} />
            ))}
        </Styled.SkeletonRoot>
      </Responsive>
    </>
  );
};

const setting = {
  dots: true,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

export default MyRoadmapList;
