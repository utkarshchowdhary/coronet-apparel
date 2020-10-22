import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles';

const FormInput = ({ label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer {...props} />
      {label ? (
        <FormInputLabel value={props.value}>{label}</FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
