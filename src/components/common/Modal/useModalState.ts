import { useState } from 'react';

export const useModalState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpen, handleClose };
};
