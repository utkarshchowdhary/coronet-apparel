import styled from 'styled-components'

import Button from '../Button/Button'

export const AddButton = styled(Button)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;

  @media screen and (max-width: 768px) {
    display: flex;
    min-width: unset;
    opacity: 0.9;
    padding: 0 10px;
  }
`

export const BackgroundImage = styled.div`
  align-self: stretch;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CollectionItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;

      @media screen and (max-width: 768px) {
        opacity: 1;
      }
    }

    ${AddButton} {
      opacity: 0.85;
    }
  }
`

export const CollectionFooterContainer = styled.div`
  align-self: stretch;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
