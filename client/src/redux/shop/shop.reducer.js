import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  RESET_COLLECTIONS
} from './shop.types'

const initialState = {
  isFetching: true,
  collections: null,
  error: ''
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        collections: action.payload
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case RESET_COLLECTIONS:
      return initialState
    default:
      return state
  }
}

export default shopReducer
