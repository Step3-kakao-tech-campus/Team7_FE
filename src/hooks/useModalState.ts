import { useCallback, useState } from 'react';

export const useModalState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, handleOpen, handleClose, handleToggle };
};
