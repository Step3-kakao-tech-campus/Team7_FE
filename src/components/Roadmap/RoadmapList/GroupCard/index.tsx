import type { Group } from '@/api/type';
import * as Style from '@/components/Roadmap/RoadmapList/GroupCard/style';
import { Avatar } from '@/components/common/Avatar/style';

interface GroupCardProps {
  roadmap: Group;
}

const GroupCard = (props: GroupCardProps) => {
  const { roadmap } = props;
  return (
    <Style.Root>
      <h5>{roadmap.name}</h5>
      <section>
        <p>{roadmap.stepNum}개 STEP</p>
        <section>
          <span>{roadmap.creator.name}</span>
          <Avatar src={'https://avatars.githubusercontent.com/u/83194164?v=4'} width={30} height={30} alt="내얼굴" />
        </section>
      </section>
    </Style.Root>
  );
};

export default GroupCard;
