import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetRoadmapsMyList } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Flex from '@/components/common/Flex';
import Responsive from '@/components/common/Responsive';
import GroupCard from '@/components/roadmap/roadmapList/GroupCard';
import * as Styled from '@/components/roadmap/roadmapList/MyRoadmap/MyRoadmapList/style';
import TilyCard from '@/components/roadmap/roadmapList/TilyCard';
import TILY_LINKS from '@/constants/links';

const MyRoadmapList = () => {
  const { tilys, groups, isLoading } = useGetRoadmapsMyList();

  if (groups?.length === 0 && tilys?.length === 0) {
    return <EmptyMyRoadmapList />;
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

const EmptyMyRoadmapList = () => {
  const router = useRouter();
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_step.svg" alt="참여중인 로드맵이 없음" width={60} height={60} />
      <Flex dir="col" gap={0.3}>
        <p>참여중인 로드맵이 없습니다.</p>
        <p>직접 로드맵을 만들고 공유해보세요!</p>
      </Flex>
      <Button onClick={() => router.push(TILY_LINKS.roadmapCreate())}>로드맵 만들기</Button>
    </Styled.EmptyRoot>
  );
};

const MyRoadmapListSkeleton = () => {
  return (
    <>
      <Responsive device="desktop">
        <Styled.SkeletonRoot gap={2}>
          {Array(4)
            .fill(null)
            .map((idx) => (
              <Styled.Skeleton key={idx} />
            ))}
        </Styled.SkeletonRoot>
      </Responsive>
      <Responsive device="mobile">
        <Styled.SkeletonRoot>
          {Array(2)
            .fill(null)
            .map((idx) => (
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
