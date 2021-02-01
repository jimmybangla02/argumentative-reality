import { Action } from '@ngrx/store';
import { AuthDetails } from './auth.model';

export type authDetailsActions = GetAuthentication | ResetAuthentication;

export enum AuthDetailsActionType {
  GET_AUTH_DETAILS = '[AuthGet] GetAuthentication',
  RESET_AUTHENTICATION = '[AuthReset] ResetAuthentication'
}

export class GetAuthentication implements Action {
  readonly type = AuthDetailsActionType.GET_AUTH_DETAILS;
  constructor(public payload: AuthDetails) {

  }
}

export class ResetAuthentication implements Action {
  readonly type = AuthDetailsActionType.RESET_AUTHENTICATION;

  constructor() {
  }
}
