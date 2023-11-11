import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDeleteReferences } from '@/api/hooks/roadmap';
import type { StepWithReferences } from '@/api/type';
import * as Styled from '@/components/roadmap/common/StepList/ReferenceList/style';
import useQueryParam from '@/hooks/useQueryParam';

interface ReferenceListProps {
  type: 'youtube' | 'web';
  step: StepWithReferences;
}

const ReferenceList = (props: ReferenceListProps) => {
  const { type, step } = props;
  const roadmapId = Number(useQueryParam('roadmapId'));
  const path = useRouter().asPath.split('/').at(-1) === 'step' ? 'manage' : 'detail';

  const { deleteReferencesAsync } = useDeleteReferences(roadmapId);

  let references = [];

  if (type === 'youtube') {
    references = step.references.youtube;
  } else {
    references = step.references.web;
  }

  const handleDeleteReference = async (referenceId: number) => {
    await deleteReferencesAsync({ referenceId });
  };

  const IframeToUrl = (iframeString: string) => {
    const regex = /src="(https:\/\/www.youtube.com\/embed\/[^"]+)"/;
    const match = iframeString.match(regex);

    // match[1]에 추출된 YouTube URL이 들어있습니다.
    return match ? match[1] : '';
  };

  if (references.length === 0) {
    return <ReferenceList.Empty />;
  }

  return (
    <Styled.Root>
      {references?.map((reference, idx) => (
        <Styled.Link key={reference.id}>
          <section>
            <Image src={`/assets/icons/ic_${type}.svg`} alt="stepEmptyIcon" width={23} height={23} />
            {type === 'web' ? (
              <p>
                {`${idx + 1}. `}
                <Link href={reference.link} target="_blank" rel="noopener noreferrer">
                  참고자료
                </Link>
              </p>
            ) : (
              <p>
                {`${idx + 1}. `}
                <Link href={IframeToUrl(reference.link)} target="_blank" rel="noopener noreferrer">
                  동영상 링크
                </Link>
              </p>
            )}
          </section>
          {path === 'manage' && (
            <Image
              src="/assets/icons/ic_trash.svg"
              alt="stepEmptyIcon"
              width={25}
              height={25}
              onClick={() => {
                handleDeleteReference(reference.id);
              }}
            />
          )}
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
