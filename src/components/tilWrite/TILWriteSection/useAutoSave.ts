import { useMemo, useState } from 'react';

export interface AutoSavedTime {
  active: boolean;
  time: Date;
}

export const useAutoSave = () => {
  const [autoSavedTime, setAutoSavedTime] = useState<AutoSavedTime>({
    active: false,
    time: new Date(),
  });

  const autoSavedTimeHandler = useMemo(
    () => ({
      activeAutoSave() {
        setAutoSavedTime({
          active: true,
          time: new Date(),
        });
      },
      clearAutoSave() {
        setAutoSavedTime({
          active: false,
          time: new Date(),
        });
      },
    }),
    [],
  );

  return { autoSavedTime, autoSavedTimeHandler };
};
