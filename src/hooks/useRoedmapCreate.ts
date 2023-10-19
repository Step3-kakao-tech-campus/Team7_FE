import { useState } from 'react';
import type { RoadmapInfo } from '@/pages/roadmap/create';

export const useRoeadmapCreate = (defaultValue: RoadmapInfo) => {
  const [info, setInfo] = useState<RoadmapInfo>(defaultValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInfo((prev) => ({ ...prev, [name]: value === 'public' ? true : value === 'private' ? false : value }));
  };

  return { info, handleOnChange };
};
