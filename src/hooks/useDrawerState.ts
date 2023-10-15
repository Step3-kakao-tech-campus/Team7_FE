import { useEffect, useState } from 'react';

interface DrawerStateProps {
  defaultValue: boolean;
  duration?: number;
  runWhenTrue?: () => void;
  runWhenFalse?: () => void;
}

export const useDrawerState = (props: DrawerStateProps) => {
  const { defaultValue, duration = 0.3, runWhenTrue, runWhenFalse } = props;

  const [isOpen, setIsOpen] = useState(defaultValue);
  const [isMount, setIsMount] = useState(defaultValue);

  const handleClose = (...callbacks: Array<() => void>) => {
    setIsOpen(false);
    callbacks.forEach((callback) => callback());
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // aside가 마운트될때 drawer가 열리면 레이아웃 깨지는 현상이 발생하여 딜레이를 주었다.
    if (isOpen) {
      runWhenTrue?.();
      setTimeout(() => {
        setIsMount(true);
      }, duration * 1000);
    }

    if (!isOpen) {
      setIsMount(false);
      runWhenFalse?.();
    }
  }, [isOpen, duration]);

  return {
    isOpen,
    isMount,
    handleClose,
    handleOpen,
    handleToggle,
  };
};
