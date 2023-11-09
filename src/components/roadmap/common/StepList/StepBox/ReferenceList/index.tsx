import Image from 'next/image';
import { useDeleteReferences } from '@/api/hooks/roadmap';
import type { StepWithReferences } from '@/api/type';
import * as Styled from '@/components/roadmap/common/StepList/ReferenceList/style';
import useQueryParam from '@/hooks/useQueryParam';

interface ReferenceListProps {
  type: '유튜브 영상' | '참고자료';
  step: StepWithReferences;
}

const ReferenceList = (props: ReferenceListProps) => {
  const roadmapId = Number(useQueryParam('roadmapId'));
  const { type, step } = props;
  const { deleteReferencesAsync } = useDeleteReferences(roadmapId);

  let references = [];

  if (type === '유튜브 영상') {
    references = step.references.youtube;
  } else {
    references = step.references.web;
  }

  const handleDeleteReference = async (referenceId: number) => {
    await deleteReferencesAsync({ referenceId });
  };

  if (references.length === 0) {
    return <ReferenceList.Empty />;
  }

  return (
    <Styled.Root>
      {references?.map((reference, idx) => (
        <Styled.Link key={reference.id}>
          <section>
            <Image
              src={`/assets/icons/ic_${type === '유튜브 영상' ? 'youtube' : 'web'}.svg`}
              alt="stepEmptyIcon"
              width={23}
              height={23}
            />
            <p>{`${idx + 1}. ${reference.link}`}</p>
          </section>
          <Image
            src="/assets/icons/ic_trash.svg"
            alt="stepEmptyIcon"
            width={25}
            height={25}
            onClick={() => {
              handleDeleteReference(reference.id);
            }}
          />
        </Styled.Link>
      ))}
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
