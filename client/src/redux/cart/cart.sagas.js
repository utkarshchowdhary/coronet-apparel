import { takeLatest, all, call, put } from 'redux-saga/effects'

import { SIGN_OUT_SUCCESS } from '../user/user.types'
import { clearCart } from './cart.actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
