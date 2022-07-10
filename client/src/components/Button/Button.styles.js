import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles
  if (props.inverted) return invertedButtonStyles
  return buttonStyles
}

export const ButtonContainer = styled.button`
  min-width: 150px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`
