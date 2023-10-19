import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import Progress from '@/components/TILWrite/RoadMap/Progress';
import * as Styled from '@/components/TILWrite/RoadMap/RoadMapInfo/style';
import CustomSuspense from '@/components/common/CustomSuspense';
import Icon from '@/components/common/Icon';
import Skeleton from '@/components/common/Skeleton';

interface RoadMapInfoProps {
  handleCloseAside: () => void;
}

const RoadMapInfo = (props: RoadMapInfoProps) => {
  const { handleCloseAside } = props;

  const { query } = useRouter();
  const { steps, isLoading } = useGetRoadmapSteps(Number(query.roadmapId));

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.RoadMapContainer>
          <Styled.RoadMap>로드맵</Styled.RoadMap>
          <Icon iconName="ic_close" imageSize={16} ext="svg" onClick={handleCloseAside} alt="닫기 버튼" />
        </Styled.RoadMapContainer>

        <Styled.Title>Java 입문 수업 (생활코딩)</Styled.Title>

        <CustomSuspense isLoading={isLoading} fallback={<ProgressSkeleton />}>
          <Progress ProgressRate={steps?.result.progress} steps={steps?.result.steps} />
        </CustomSuspense>
      </Styled.Container>
    </Styled.Root>
  );
};

export default RoadMapInfo;

const ProgressSkeleton = () => {
  return (
    <Styled.ProgressSkeletonRoot>
      <Skeleton css={Styled.ProgressRateStyle} />
      <Skeleton css={Styled.ProgressBarStyle} />
    </Styled.ProgressSkeletonRoot>
  );
};
