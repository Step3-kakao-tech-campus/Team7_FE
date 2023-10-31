import { useRouter } from 'next/router';
import { useGetRoadmapStepReference } from '@/api/hooks/roadmap';
import Docs from '@/components/TILWrite/Reference/Docs';
import Header from '@/components/TILWrite/Reference/Header';
import Youtube from '@/components/TILWrite/Reference/Youtube';
import * as Styled from './style';

interface ReferenceProps {
  handleCloseReferenceAside: () => void;
}
const Reference = (props: ReferenceProps) => {
  const { handleCloseReferenceAside } = props;

  const { query } = useRouter();
  const { reference } = useGetRoadmapStepReference({
    roadmapId: Number(query?.roadmapId),
    stepId: Number(query?.stepId),
  });

  return (
    <Styled.Root>
      <Header handleCloseReferenceAside={handleCloseReferenceAside} />

      <Styled.Reference>참고 자료</Styled.Reference>

      {reference?.youtubes?.map((item, index) => {
        return <Youtube key={item.id} index={index + 1} link={item.link} />;
      })}

      {reference?.references?.map((item, index) => {
        return <Docs key={item.id} index={index + 1} link={item.link} />;
      })}
    </Styled.Root>
  );
};

export default Reference;
