import { useCallback, useState } from 'react';

export const useStepTitle = () => {
  const [stepTitle, setStepTitle] = useState<string>('');

  const handleStepTitle = useCallback((title: string) => {
    setStepTitle(title);
  }, []);

  return { stepTitle, handleStepTitle };
};
