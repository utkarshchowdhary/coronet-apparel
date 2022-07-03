import React from 'react'
import ReactDOM from 'react-dom'

import { BackdropContainer } from './Backdrop.styles'

const Backdrop = ({ hide }) => {
  const content = <BackdropContainer onClick={hide}></BackdropContainer>

  return ReactDOM.createPortal(
    content,
    document.getElementById('backdrop-root')
  )
}

export default Backdrop
