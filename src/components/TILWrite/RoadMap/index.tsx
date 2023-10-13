import RoadMapInfo from '@/components/TILWrite/RoadMap/RoadMapInfo';
import Step from '@/components/TILWrite/RoadMap/Step';
import * as Styled from './style';

interface RoadMapProps {
  handleCloseAside: () => void;
  handleOpenReferenceAside: () => void;
}

const RoadMap = (props: RoadMapProps) => {
  const { handleCloseAside, handleOpenReferenceAside } = props;

  return (
    <Styled.Root>
      <RoadMapInfo handleCloseAside={handleCloseAside} />

      <Styled.StepList>
        {Array.from({ length: 30 }).map((_, index) => {
          return <Step key={index} handleOpenReferenceAside={handleOpenReferenceAside} />;
        })}
      </Styled.StepList>
    </Styled.Root>
  );
};

export default RoadMap;
