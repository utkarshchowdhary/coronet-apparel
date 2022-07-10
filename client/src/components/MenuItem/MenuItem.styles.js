import styled from 'styled-components'

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
`

export const MenuItemContainer = styled.div`
  flex: 1 0 30%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ContentContainer} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`
