import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import { useGetTil } from '@/api/hooks/til';
import Progress from '@/components/TILWrite/RoadMap/Progress';
import RoadmapPopover from '@/components/TILWrite/RoadMap/RoadMapInfo/Popover';
import CustomSuspense from '@/components/common/CustomSuspense';
import Icon from '@/components/common/Icon';
import Skeleton from '@/components/common/Skeleton';
import * as Styled from './style';

interface RoadMapInfoProps {
  handleCloseAside: () => void;
}

const RoadMapInfo = (props: RoadMapInfoProps) => {
  const { handleCloseAside } = props;

  const { query } = useRouter();
  const { steps, isLoading } = useGetRoadmapSteps(Number(query.roadmapId));
  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.RoadMapContainer>
          <Styled.RoadMap>로드맵</Styled.RoadMap>
          <Icon iconName="ic_close" imageSize={16} ext="svg" onClick={handleCloseAside} alt="닫기 버튼" />
        </Styled.RoadMapContainer>

        <Styled.Title>
          <RoadmapPopover userRole={steps?.result.myRole}>{tilDetail?.roadmapName}</RoadmapPopover>
        </Styled.Title>

        <CustomSuspense isLoading={isLoading} fallback={<ProgressSkeleton />}>
          <Progress steps={steps?.result.steps} />
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
