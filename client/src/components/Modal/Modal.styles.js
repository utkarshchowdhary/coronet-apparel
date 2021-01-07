import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 92vw;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.6rem 3rem;
  border: 3px solid black;
  border-radius: 5px;
  background: white;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const MessageContainer = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1.6rem;
  margin-top: 0;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.button`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  background: white;
  padding: 0.3rem 2.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 0.4rem 0.4rem 0 black;
    transform: translate(-0.4rem, -0.4rem);
  }

  &:active {
    box-shadow: 0 0 0 black;
    transform: translate(0, 0);
  }

  @media screen and (max-width: 768px) {
    margin-right: 1.2rem;
  }
`;
