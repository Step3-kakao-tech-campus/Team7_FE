import Image from 'next/image';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/ReferenceList/style';
import { useReference } from '@/hooks/useReference';

interface ReferenceListProps {
  type: string;
  stepIdx: number;
}

// youtube, web 에서 재사용하는 참고자료 리스트
const ReferenceList = (props: ReferenceListProps) => {
  const { type, stepIdx } = props;

  // 참고자료 리스트에서 사용될 커스텀 훅
  const { references, handleDeleteReference } = useReference(type, stepIdx);

  if (references.length === 0) {
    return <ReferenceList.Empty />;
  }

  return (
    <Styled.EmptyRoot>
      {references.map((reference, idx) => (
        <Styled.Link key={idx}>
          <section>
            <Image src={`/assets/icons/ic_${type}.svg`} alt="stepEmptyIcon" width={23} height={23} />
            <p>{`${idx + 1}. ${reference.link}`}</p>
          </section>

          <Image
            src="/assets/icons/ic_trash.svg"
            alt="stepEmptyIcon"
            width={25}
            height={25}
            onClick={() => {
              handleDeleteReference(idx);
            }}
          />
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
