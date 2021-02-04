import {SetUrlState, initialSetUrlState} from './set-url.store';
import {SetUrlActions, SetUrlActionTypes} from './set-url.action';

export function setUrlReducer(
  state: SetUrlState = initialSetUrlState,
  action: SetUrlActions,
): SetUrlState {
  switch (action.type) {
    case SetUrlActionTypes.SET_URL:
      return state = action.payload;
    default:
      return state;
  }
}
