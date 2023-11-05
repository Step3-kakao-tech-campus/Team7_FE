import type { RefObject } from 'react';
import { useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

// HTMLElement 의 하위 요소만 들어오게끔 제네릭을 사용함.
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  isActive?: boolean,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // ref.current 가 존재하지 않거나, ref.current 가 event.target(현재 클릭된 element)를 포함하고 있으면 handler 를 실행하지 않음.
      if (!ref.current || ref.current.contains(event?.target as Node) || isActive === false) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
