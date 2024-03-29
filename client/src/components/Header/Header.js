import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import {
  selectIsUserChecking,
  selectCurrentUser
} from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles'

const Header = ({ isChecking, currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser && (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        )}
        {!isChecking && !currentUser && (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  isChecking: selectIsUserChecking,
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
