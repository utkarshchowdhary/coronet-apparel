import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { signUpStart } from '../../redux/user/user.actions'
import { SignUpContainer } from './SignUp.styles'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [message, setMessage] = useState('')

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage("password's don't match")
    } else {
      signUpStart({ email, password, displayName })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const hideMessageHandler = () => {
    setMessage('')
  }

  return (
    <>
      {message && <Modal message={message} hide={hideMessageHandler} />}
      <SignUpContainer>
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
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
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </SignUpContainer>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
