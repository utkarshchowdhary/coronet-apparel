import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, total }) => {
  return (
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
      <WarningContainer>
        *Please use following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVV- Any 3 digit number
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
