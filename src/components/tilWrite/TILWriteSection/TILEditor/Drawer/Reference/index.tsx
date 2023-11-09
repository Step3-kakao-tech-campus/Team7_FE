import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapStepReference } from '@/api/hooks/roadmap';
import Fallback from '@/components/common/Fallback';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';
import Docs from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference/Docs';
import Header from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference/Header';
import Youtube from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference/Youtube';
import * as Styled from './style';

interface ReferenceProps {
  stepTitle: string;
  handleCloseReferenceAside: () => void;
}
const Reference = (props: ReferenceProps) => {
  const { stepTitle, handleCloseReferenceAside } = props;

  const { query } = useRouter();
  const { reference } = useGetRoadmapStepReference({
    param: {
      stepId: Number(query?.stepId),
    },
  });

  const isEmptyReference = useMemo(() => reference?.youtubes.length === 0 && reference?.webs.length === 0, [reference]);

  return (
    <Styled.Root>
      <Header stepTitle={stepTitle} handleCloseReferenceAside={handleCloseReferenceAside} />

      <Styled.Reference>참고 자료</Styled.Reference>

      {isEmptyReference ? (
        <Reference.Empty />
      ) : (
        <>
          {reference?.youtubes?.map((item, index) => {
            return <Youtube key={item.id} index={index + 1} link={item.link} />;
          })}

          {reference?.webs?.map((item, index) => {
            return <Docs key={item.id} index={index + 1} link={item.link} />;
          })}
        </>
      )}
    </Styled.Root>
  );
};

export default Reference;

Reference.Fallback = function (props: ErrorBoundaryProps) {
  const { resetErrorBoundary } = props;

  return (
    <Styled.FallbackRoot>
      <Fallback
        onClick={() => {
          resetErrorBoundary();
        }}
      />
    </Styled.FallbackRoot>
  );
};

Reference.Empty = function Empty() {
  return (
    <Styled.EmptyRoot>
      <img src="/assets/icons/ic_step.svg" alt="stepEmptyIcon" />
      <h3>참고자료가 없습니다.</h3>
    </Styled.EmptyRoot>
  );
};
