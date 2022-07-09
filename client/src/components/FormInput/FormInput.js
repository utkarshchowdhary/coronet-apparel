import React from 'react'

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './FormInput.styles'

const FormInput = ({ element = 'input', label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer as={element} {...props} />
      {label && <FormInputLabel>{label}</FormInputLabel>}
    </GroupContainer>
  )
}

export default FormInput
