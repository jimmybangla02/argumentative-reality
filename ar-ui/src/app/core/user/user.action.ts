import { Action } from '@ngrx/store';
import { UserDetails } from './user.model';

export type userDetailsActions = GetUserDetails | ResetUserDetails;

export enum UserDetailsActionType {
  GET_USER_DETAILS = '[UserGet] GetUserDetails',
  RESET_USER_DETAILS = '[UserReset] ResetUserDetails'
}

export class GetUserDetails implements Action {
  readonly type = UserDetailsActionType.GET_USER_DETAILS;
  constructor(public payload: UserDetails) {

  }
}

export class ResetUserDetails implements Action {
  readonly type = UserDetailsActionType.RESET_USER_DETAILS;
  constructor() {

  }
}
