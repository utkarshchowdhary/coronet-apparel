import React, { useEffect, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton
} from './CartDropdown.styles'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const ref = useRef(null)

  const clickListener = useCallback(
    (e) => {
      if (!ref.current.contains(e.target)) {
        toggleCartHidden()
      }
    },
    [toggleCartHidden]
  )

  const escapeListener = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        toggleCartHidden()
      }
    },
    [toggleCartHidden]
  )

  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])

  return (
    <CartDropdownContainer ref={ref}>
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItemsContainer>
      {cartItems.length ? null : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          toggleCartHidden()
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
)
