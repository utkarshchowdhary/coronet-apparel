import { takeLatest, all, call, put } from 'redux-saga/effects'

import { FETCH_COLLECTIONS_START } from './shop.types'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase'
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
