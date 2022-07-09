import {
  FINISH_CHECKING,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE
} from './user.types'

const initialState = {
  isChecking: true,
  currentUser: null,
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_CHECKING:
      return { ...state, isChecking: false }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isChecking: false,
        currentUser: action.payload,
        error: ''
      }
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: '' }
    case SIGN_IN_FAILURE:
      return { ...state, isChecking: false, error: action.payload }
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default userReducer
