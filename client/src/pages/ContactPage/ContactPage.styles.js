import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: auto;
  margin: 30px auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: unset;
    margin: 1rem;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 380px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-image: url(/zig-zag.svg);

  h1 {
    margin: 1rem;
    text-align: center;
    text-decoration: underline;
    font-weight: 700;
  }

  p {
    margin: 1rem;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const FormContainer = styled.div`
  width: 380px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    text-align: center;
    font-weight: 700;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 5px solid #e1e2e2;
  border-radius: 50%;
  border-top-color: #7da2a9;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
