import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClick }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      onClick();
    }
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal>{children}</StyledModal>
    </Backdrop>,
    modalRoot
  );
}
