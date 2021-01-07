import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin-right: 1.2rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button:first-child {
    margin-right: 1.2rem;
  }
`;
