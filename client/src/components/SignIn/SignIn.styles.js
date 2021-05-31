import styled from 'styled-components'

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  margin-right: 1.2rem;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    padding: 2rem;
  }
`

export const ButtonsBarContainer = styled.div`
  display: flex;

  button:first-child {
    margin-right: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    button:first-child {
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  }
`
