import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './shop.types'

const initialState = {
  isFetching: false,
  collections: null,
  error: null
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        collections: action.payload
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
