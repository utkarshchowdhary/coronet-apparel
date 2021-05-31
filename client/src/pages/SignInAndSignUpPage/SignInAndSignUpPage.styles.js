import styled from 'styled-components'

export const SignInAndSignUpContainer = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    & > *:first-child {
      margin-bottom: 50px;
    }
  }
`
