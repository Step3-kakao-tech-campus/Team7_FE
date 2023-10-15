import RoadMapInfo from '@/components/TILWrite/RoadMap/RoadMapInfo';
import Step from '@/components/TILWrite/RoadMap/Step';
import * as Styled from './style';

interface RoadMapProps {
  handleCloseAside: () => void;
  handleOpenReferenceAside: () => void;
  asideMount: boolean;
}

const RoadMap = (props: RoadMapProps) => {
  const { handleCloseAside, handleOpenReferenceAside, asideMount } = props;

  return (
    <Styled.Root
      initial="closed"
      animate={asideMount ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }}
      transition={{ type: 'tween' }}>
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
