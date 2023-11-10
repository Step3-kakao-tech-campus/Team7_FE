import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import { useGetTils } from '@/api/hooks/til';
import CustomSuspense from '@/components/common/CustomSuspense';
import Icon from '@/components/common/Icon';
import Skeleton from '@/components/common/Skeleton';
import Progress from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/RoadMap/Progress';
import RoadmapPopover from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/RoadMap/RoadMapInfo/Popover';
import * as Styled from './style';

interface RoadMapInfoProps {
  handleCloseAside: () => void;
}

const RoadMapInfo = (props: RoadMapInfoProps) => {
  const { handleCloseAside } = props;

  const router = useRouter();
  const { steps, isLoading } = useGetRoadmapSteps(Number(router.query.roadmapId));
  const { tilDetail } = useGetTils({
    tilId: Number(router.query.tilId),
  });

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.RoadMapContainer>
          <Styled.RoadMap>로드맵</Styled.RoadMap>
          <Icon iconName="ic_close" imageSize={16} ext="svg" onClick={handleCloseAside} alt="닫기 버튼" />
        </Styled.RoadMapContainer>

        <Styled.Title>
          <RoadmapPopover userRole={steps?.result.myRole}>
            <span css={Styled.RoadmapTitleStyle}>{tilDetail?.roadmapName}</span>
          </RoadmapPopover>
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
