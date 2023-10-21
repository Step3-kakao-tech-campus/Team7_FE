import Image from 'next/image';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeList/style';
import type { ReferenceLink } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

interface YoutubeListProps {
  youtubes: ReferenceLink[];
}

const YoutubeList = (props: YoutubeListProps) => {
  const { youtubes } = props;
  return (
    <Styled.EmptyRoot>
      {youtubes.map((youtube, idx) => (
        <Styled.Link key={idx}>
          <section>
            <Image src="/assets/icons/ic_link.svg" alt="stepEmptyIcon" width={25} height={25} />
            <p>{`${idx + 1}. ${youtube.link}`}</p>
          </section>

          <Image src="/assets/icons/ic_trash.svg" alt="stepEmptyIcon" width={25} height={25} />
        </Styled.Link>
      ))}
    </Styled.EmptyRoot>
  );
};

YoutubeList.Empty = function Empty() {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_noLink.svg" alt="stepEmptyIcon" width={35} height={35} />
      <h4>생성된 링크가 없습니다.</h4>
    </Styled.EmptyRoot>
  );
};

export default YoutubeList;
