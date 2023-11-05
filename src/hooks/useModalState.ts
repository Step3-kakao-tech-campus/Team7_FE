import { useState } from 'react';

export const useModalState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleOpen, handleClose, handleToggle };
};
