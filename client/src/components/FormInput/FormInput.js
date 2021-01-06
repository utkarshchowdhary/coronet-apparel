import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles';

const FormInput = ({ element = 'input', label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer as={element} {...props} />
      {label ? (
        <FormInputLabel value={props.value}>{label}</FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
