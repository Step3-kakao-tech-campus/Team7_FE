import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import RoadMapInfo from '@/components/TILWrite/Drawer/RoadMap/RoadMapInfo';
import Step from '@/components/TILWrite/Drawer/RoadMap/Step';
import * as Styled from './style';

interface RoadMapProps {
  asideMount: boolean;
  handleCloseAside: () => void;
  handleOpenReferenceAside: () => void;
  handleAutoSaveTime: {
    activeAutoSave: () => void;
    clearAutoSave: () => void;
  };
  handleStepTitle: (title: string) => void;
}

const RoadMap = (props: RoadMapProps) => {
  const { asideMount, handleCloseAside, handleOpenReferenceAside, handleAutoSaveTime, handleStepTitle } = props;

  const { query } = useRouter();
  const { steps } = useGetRoadmapSteps(Number(query.roadmapId));

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
        {steps?.result.steps.map((step) => {
          return (
            <Step
              key={step.id}
              stepId={step.id}
              title={step.title}
              isSubmit={step.isSubmit}
              tilId={step.tilId}
              handleOpenReferenceAside={handleOpenReferenceAside}
              handleAutoSaveTime={handleAutoSaveTime}
              handleStepTitle={handleStepTitle}
            />
          );
        })}
      </Styled.StepList>
    </Styled.Root>
  );
};

export default RoadMap;
