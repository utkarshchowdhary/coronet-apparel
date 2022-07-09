import { createSelector } from 'reselect'

const selectUser = (state) => state.user

export const selectIsUserChecking = createSelector(
  selectUser,
  (user) => user.isChecking
)

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
)
