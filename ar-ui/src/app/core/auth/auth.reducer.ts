import {AuthDetailsState, initialAuthDetailsState} from './auth.store';
import {authDetailsActions, AuthDetailsActionType} from './auth.action';

export function authDetailsReducer(
  state: AuthDetailsState = initialAuthDetailsState,
  action: authDetailsActions
): AuthDetailsState {
  switch (action.type) {
    case AuthDetailsActionType.GET_AUTH_DETAILS:
      return state = {...state , authDetails: action.payload};
    case AuthDetailsActionType.RESET_AUTHENTICATION:
      return state = initialAuthDetailsState;
    default:
      return state;
  }
}
