import { useCallback, useState } from 'react';

export const useTILContent = () => {
  const [TILContent, setTILContent] = useState<string>('');

  const handleTILContent = useCallback((content: string) => {
    setTILContent(content);
  }, []);

  return { TILContent, handleTILContent };
};
