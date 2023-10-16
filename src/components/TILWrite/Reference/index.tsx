import { useGetRoadmapStepReference } from '@/api/hooks/roadmap';
import Docs from '@/components/TILWrite/Reference/Docs';
import Header from '@/components/TILWrite/Reference/Header';
import Youtube from '@/components/TILWrite/Reference/Youtube';
import * as Styled from './style';

interface ReferenceProps {
  referenceParam: { roadmapId: number; stepId: number } | null;
  handleCloseReferenceAside: () => void;
}
const Reference = (props: ReferenceProps) => {
  const { referenceParam, handleCloseReferenceAside } = props;

  const { reference } = useGetRoadmapStepReference({
    roadmapId: Number(referenceParam?.roadmapId),
    stepId: Number(referenceParam?.stepId),
  });

  return (
    <Styled.Root>
      <Header handleCloseReferenceAside={handleCloseReferenceAside} />

      <Styled.Reference>참고 자료</Styled.Reference>

      {reference?.youtube.map((item, index) => {
        return <Youtube key={item.id} index={index + 1} link={item.link} />;
      })}

      {reference?.web.map((item, index) => {
        return <Docs key={item.id} index={index + 1} link={item.link} />;
      })}
    </Styled.Root>
  );
};

export default Reference;
