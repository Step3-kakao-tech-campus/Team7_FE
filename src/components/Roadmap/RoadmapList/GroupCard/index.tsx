import Image from 'next/image';
import { useRouter } from 'next/router';
import type { Group } from '@/api/type';
import * as Style from '@/components/Roadmap/RoadmapList/GroupCard/style';
import { Avatar } from '@/components/common/Avatar/style';
import Flex from '@/components/common/Flex';
import TILY_LINK from '@/constants/links';

interface GroupCardProps {
  roadmap: Group;
}

const GroupCard = (props: GroupCardProps) => {
  const { roadmap } = props;
  const router = useRouter();
  return (
    <Style.Root
      onClick={() => {
        router.push(TILY_LINK.roadmapDetail(roadmap.id));
      }}>
      <section>
        {' '}
        <h5>{roadmap.name}</h5>
        <p>{roadmap.description}</p>
      </section>

      <section>
        <Flex
          align="center"
          justify="space-between"
          onClick={(e) => {
            e.stopPropagation();
            router.push(TILY_LINK.manageGroupInfo(roadmap.id));
          }}>
          <span>{roadmap.stepNum}개 STEP</span>
          {roadmap.isManager && (
            <Style.RoadmapEdit align="center" gap={0.3}>
              <span>관리</span>
              <Image src="/assets/icons/ic_setting.svg" width={17} height={17} alt="로드맵 관리" />
            </Style.RoadmapEdit>
          )}
        </Flex>

        <section>
          <span>{roadmap.creator.name}</span>
          <Avatar src={'https://avatars.githubusercontent.com/u/83194164?v=4'} width={30} height={30} alt="내얼굴" />
        </section>
      </section>
    </Style.Root>
  );
};

export default GroupCard;
