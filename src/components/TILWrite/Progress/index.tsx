import * as Styled from './style';

const Progress = () => {
  return (
    <Styled.Root>
      <Styled.ProgressRate>진도율 : 80/160 (50.00%)</Styled.ProgressRate>
      <Styled.ProgressContainer>
        <Styled.Rail />
        <Styled.Progress progress={50} />
      </Styled.ProgressContainer>
    </Styled.Root>
  );
};

export default Progress;
