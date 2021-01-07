import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.scss';

const Backdrop = ({ hide }) => {
  const content = <div className="backdrop" onClick={hide}></div>;

  return ReactDOM.createPortal(
    content,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
