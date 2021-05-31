import styled from 'styled-components'
import Button from '../Button/Button'

export const CartDropdownContainer = styled.div`
  height: 340px;
  width: 275px;
  position: absolute;
  top: 90px;
  right: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;
`

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsContainer = styled.div`
  max-height: 240px;
  overflow: auto;
`
