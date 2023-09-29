import { useRef } from 'react';

type TimeoutID = ReturnType<typeof setTimeout>;

export const useTimeout = () => {
  const timeoutRef = useRef<TimeoutID | null>(null);

  return {
    set(handler: () => void, duration: number) {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(handler, duration);
    },
  };
};
