import React, { useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {
  ContactPageContainer,
  InfoContainer,
  FormContainer,
  ButtonContainer,
} from './ContactPage.styles';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <ContactPageContainer>
      <InfoContainer>
        <h1>Contact Me</h1>
        <p>
          This seemingly impersonal contact form aside will deliver your message
          personally to my inbox. I usually reply within 48 hours.
        </p>
        <p>
          Not a fan of contact forms? Feel free to send me an email to
          utkarshkororo@gmail.com or message me using the form aside.
        </p>
      </InfoContainer>
      <FormContainer>
        <h1>Hi, there!</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            element="textarea"
            name="message"
            value={message}
            onChange={handleChange}
            label="Message"
            required
          />
          <ButtonContainer>
            <CustomButton type="submit">Send</CustomButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
