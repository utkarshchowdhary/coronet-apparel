import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { clearCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, setOutput, clearCart }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51He2W9I7khmW0eo4VjuYYUYmEOR5VLwRtmJrD68tsu8TO5sBezt9Zat1xDxsQ55wy1pX4mFrRibrS8dfbqvsxFtp00clfFlk73'

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
        console.log(response)
        clearCart()
        setOutput('Payment successful')
      })
      .catch((error) => {
        console.log('Payment error: ', error)
        setOutput(
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
