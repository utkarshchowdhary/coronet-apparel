import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  flex: auto;
  margin: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
