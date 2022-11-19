import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClick();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <StyledModal>{children}</StyledModal>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
