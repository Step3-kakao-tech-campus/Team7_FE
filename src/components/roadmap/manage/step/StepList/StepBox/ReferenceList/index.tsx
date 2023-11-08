import Image from 'next/image';
import * as Styled from '@/components/roadmap/manage/step/StepList/StepBox/ReferenceList/style';

interface ReferenceListProps {
  type: 'youtube' | 'web';
  stepIdx: number;
  where: 'detail' | 'create';
}

// youtube, web 에서 재사용하는 참고자료 리스트
const ReferenceList = (props: ReferenceListProps) => {
  // const { type, stepIdx, where } = props;

  // // 참고자료 리스트에서 사용될 커스텀 훅
  // // const { roadmap, handleDeleteReference } = useRoadmap();

  // let references = [];

  // if (type === 'youtube') {
  //   references = roadmap.steps[stepIdx].references.youtube;
  // } else {
  //   references = roadmap.steps[stepIdx].references.web;
  // }

  // if (references.length === 0) {
  //   return <ReferenceList.Empty />;
  // }

  return (
    <Styled.Root>
      {/* {references?.map((reference, idx) => (
        <Styled.Link key={idx}>
          <section>
            <Image src={`/assets/icons/ic_${type}.svg`} alt="stepEmptyIcon" width={23} height={23} />
            <p>{`${idx + 1}. ${reference.link}`}</p>
          </section>

          {where === 'create' && (
            <Image
              src="/assets/icons/ic_trash.svg"
              alt="stepEmptyIcon"
              width={25}
              height={25}
              onClick={() => {
                handleDeleteReference(type, stepIdx, idx);
              }}
            />
          )}
        </Styled.Link>
      ))} */}
    </Styled.Root>
  );
};

ReferenceList.Empty = function Empty() {
  return (
    <Styled.Root>
      <Image src="/assets/icons/ic_noLink.svg" alt="stepEmptyIcon" width={35} height={35} />
      <h4>생성된 링크가 없습니다.</h4>
    </Styled.Root>
  );
};

export default ReferenceList;
