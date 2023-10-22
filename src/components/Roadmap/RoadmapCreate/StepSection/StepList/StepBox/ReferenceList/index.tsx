import Image from 'next/image';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/ReferenceList/style';
import type { ReferenceLink } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

interface ReferenceListProps {
  type: string;
  references: ReferenceLink[];
}

const ReferenceList = (props: ReferenceListProps) => {
  const { type, references } = props;
  return (
    <Styled.EmptyRoot>
      {references.map((youtube, idx) => (
        <Styled.Link key={idx}>
          <section>
            <Image src={`/assets/icons/ic_${type}.svg`} alt="stepEmptyIcon" width={23} height={23} />
            <p>{`${idx + 1}. ${youtube.link}`}</p>
          </section>

          <Image src="/assets/icons/ic_trash.svg" alt="stepEmptyIcon" width={25} height={25} />
        </Styled.Link>
      ))}
    </Styled.EmptyRoot>
  );
};

ReferenceList.Empty = function Empty() {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_noLink.svg" alt="stepEmptyIcon" width={35} height={35} />
      <h4>생성된 링크가 없습니다.</h4>
    </Styled.EmptyRoot>
  );
};

export default ReferenceList;
