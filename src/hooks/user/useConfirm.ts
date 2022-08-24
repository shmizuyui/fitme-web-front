import { useState } from "react";

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return {
    isOpen,
    closeModal,
    openModal,
  };
};
