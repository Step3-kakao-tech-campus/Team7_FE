import type { Step } from '@/api/type';
import * as Styled from './style';

interface ProgressProps {
  steps?: Step[];
}

const Progress = (props: ProgressProps) => {
  const { steps } = props;

  const totalStepCount = steps?.length;
  const completedStepCount = steps?.filter((step) => step.isSubmit).length;

  const percentage = ((completedStepCount! / totalStepCount!) * 100).toFixed(2);

  return (
    <Styled.Root>
      <Styled.ProgressRate>{`진도율 : ${completedStepCount}/${totalStepCount} (${percentage}%)`}</Styled.ProgressRate>
      <Styled.ProgressContainer>
        <Styled.Rail />
        <Styled.Progress progress={percentage} />
      </Styled.ProgressContainer>
    </Styled.Root>
  );
};

export default Progress;
