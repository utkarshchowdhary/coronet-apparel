import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors'
import {
  selectIsUserChecking,
  selectCurrentUser
} from '../../redux/user/user.selectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'
import Modal from '../../components/Modal/Modal'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  RemindContainer
} from './CheckoutPage.styles'

const CheckoutPage = ({ isChecking, currentUser, cartItems, total }) => {
  const [message, setMessage] = useState('')

  const hideMessageHandler = () => {
    setMessage('')
  }

  return (
    <>
      {message && <Modal message={message} hide={hideMessageHandler} />}
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        {currentUser && (
          <WarningContainer>
            *Please use following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: Any future date - CVV- Any 3 digit number
          </WarningContainer>
        )}
        {!isChecking && !currentUser && (
          <RemindContainer>*Please Login before checkout*</RemindContainer>
        )}
        {currentUser && total > 0 && (
          <StripeCheckoutButton price={total} setMessage={setMessage} />
        )}
      </CheckoutPageContainer>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  isChecking: selectIsUserChecking,
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
