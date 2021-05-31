import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  padding: 15px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid darkgrey;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 22%;
  }
`

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 768px) {
    width: 22%;
  }
`

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`

export const RemoveButtonContainer = styled.div`
  width: 8%;
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 12%;
  }
`
