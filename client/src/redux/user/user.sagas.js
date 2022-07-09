import { takeLatest, all, call, put } from 'redux-saga/effects'

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from '../../firebase/firebase'
import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} from './user.types'
import {
  finishChecking,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions'

export function* getSnapshotFromUserAndAuthenticate(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (err) {
    yield put(signInFailure(err.message))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAndAuthenticate(user)
  } catch (err) {
    yield put(signInFailure(err.message))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAndAuthenticate(user)
  } catch (err) {
    yield put(signInFailure(err.message))
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser()
    if (!user) {
      yield put(finishChecking())
    } else {
      yield getSnapshotFromUserAndAuthenticate(user)
    }
  } catch (err) {
    yield put(signInFailure(err.message))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (err) {
    yield put(signOutFailure(err.message))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({ user, additionalData: { displayName } }))
  } catch (err) {
    yield put(signUpFailure(err.message))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAndAuthenticate(user, additionalData)
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp)
}

export function* onSignupSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignupSuccess)
  ])
}
