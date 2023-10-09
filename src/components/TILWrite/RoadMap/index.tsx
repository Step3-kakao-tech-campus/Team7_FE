import RoadMapInfo from '@/components/TILWrite/RoadMap/RoadMapInfo';
import StepList from '@/components/TILWrite/RoadMap/StepList';
import * as Styled from './style';

const RoadMap = () => {
  return (
    <Styled.Root>
      <RoadMapInfo />
      <StepList />
    </Styled.Root>
  );
};

export default RoadMap;
