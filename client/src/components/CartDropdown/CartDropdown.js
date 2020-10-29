import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
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
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
