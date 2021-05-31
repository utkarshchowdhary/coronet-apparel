import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { clearCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, setMessage, clearCart }) => {
  const priceForStripe = price * 100
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((response) => {
        console.log('Response: ', response)
        clearCart()
        setMessage('Payment successful')
      })
      .catch((error) => {
        console.log('Payment error: ', error)
        setMessage(
          'There was an issue with your payment. Please use a valid credit card.'
        )
      })
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Coronet Apparel Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)
