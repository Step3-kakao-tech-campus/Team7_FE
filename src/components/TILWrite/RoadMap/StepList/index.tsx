import Step from '@/components/TILWrite/RoadMap/Step';
import * as Styled from './style';

const StepList = () => {
  return (
    <Styled.Root>
      {Array.from({ length: 30 }).map((_, index) => {
        return <Step key={index} />;
      })}
    </Styled.Root>
  );
};

export default StepList;
