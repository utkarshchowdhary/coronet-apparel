import React, { useState } from 'react'
import { connect } from 'react-redux'

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

import { SignInContainer, ButtonsBarContainer } from './SignIn.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </Button>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
