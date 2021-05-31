import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  height: 80px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

export const CartItemImage = styled.img`
  flex: 0 0 30%;
`

export const ItemDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`
