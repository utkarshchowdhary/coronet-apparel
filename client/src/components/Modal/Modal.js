import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const Modal = ({ message, hide }) => {
  const history = useHistory();

  const content = (
    <>
      <Backdrop hide={hide} />
      <div className="modal">
        <h4>{message}</h4>
        <div className="options">
          <button className="btn" onClick={hide}>
            Okay
          </button>
          <button className="btn" onClick={() => history.push('/')}>
            Exit
          </button>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default Modal;
