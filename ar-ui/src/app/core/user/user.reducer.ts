import {UserDetailsState, initialUserDetailsState} from './user.store';
import {userDetailsActions, UserDetailsActionType} from './user.action';

export function userDetailsReducer(
  state: UserDetailsState = initialUserDetailsState,
  action: userDetailsActions
): UserDetailsState {
  switch (action.type) {
    case UserDetailsActionType.GET_USER_DETAILS:
      return state = action.payload;
    case UserDetailsActionType.RESET_USER_DETAILS:
      return state = initialUserDetailsState;
    default:
      return state;
  }
}
