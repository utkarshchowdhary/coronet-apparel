import React, { useEffect, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/Header/Header'
import Spinner from './components/Spinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import {
  selectIsUserChecking,
  selectCurrentUser
} from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import { GlobalStyle } from './global.styles'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'))
const SignInAndSignUpPage = lazy(() =>
  import('./pages/SignInAndSignUpPage/SignInAndSignUpPage')
)

const App = ({ isChecking, currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route
              path="/signin"
              render={() =>
                isChecking ? (
                  <Spinner />
                ) : currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

const mapStateToProps = createStructuredSelector({
  isChecking: selectIsUserChecking,
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
