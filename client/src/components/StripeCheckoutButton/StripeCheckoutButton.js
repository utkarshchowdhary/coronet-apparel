import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51He2W9I7khmW0eo4VjuYYUYmEOR5VLwRtmJrD68tsu8TO5sBezt9Zat1xDxsQ55wy1pX4mFrRibrS8dfbqvsxFtp00clfFlk73';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with your payment. Please use a valid credit card.'
        );
      });
  };

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
  );
};

export default StripeCheckoutButton;
