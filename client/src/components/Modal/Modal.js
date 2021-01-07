import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import Backdrop from '../Backdrop/Backdrop';

import {
  ModalContainer,
  MessageContainer,
  OptionsContainer,
  ButtonContainer,
} from './Modal.styles';

const Modal = ({ message, hide }) => {
  const history = useHistory();

  const content = (
    <>
      <Backdrop hide={hide} />
      <ModalContainer>
        <MessageContainer>{message}</MessageContainer>
        <OptionsContainer>
          <ButtonContainer onClick={hide}>Okay</ButtonContainer>
          <ButtonContainer onClick={() => history.push('/')}>
            Exit
          </ButtonContainer>
        </OptionsContainer>
      </ModalContainer>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default Modal;
