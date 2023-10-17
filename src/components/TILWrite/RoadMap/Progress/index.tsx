import type { Step } from '@/api/type';
import * as Styled from './style';

interface ProgressProps {
  ProgressRate?: number;
  steps?: Step[];
}

const Progress = (props: ProgressProps) => {
  const { ProgressRate, steps } = props;

  const totalStepCount = steps?.length;
  const completedStepCount = steps?.filter((step) => step.isCompleted).length;

  return (
    <Styled.Root>
      {ProgressRate && (
        <Styled.ProgressRate>{`진도율 : ${completedStepCount}/${totalStepCount} (${ProgressRate}.00%)`}</Styled.ProgressRate>
      )}
      <Styled.ProgressContainer>
        <Styled.Rail />
        {ProgressRate && <Styled.Progress progress={ProgressRate} />}
      </Styled.ProgressContainer>
    </Styled.Root>
  );
};

export default Progress;
