import styled from '@emotion/styled';

export const Root = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

export const ProgressRate = styled.div`
  font-size: 0.875rem;
`;

export const ProgressContainer = styled.div`
  position: relative;
  width: 100%;

  margin-top: 0.375rem;
`;

export const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Progress = styled.div<{ progress: string }>`
  position: absolute;
  top: 6px;
  left: 0;
  width: ${({ progress }) => `${progress}%`};
  height: 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.rose};
`;
