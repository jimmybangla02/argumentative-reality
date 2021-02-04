import { Action } from '@ngrx/store';
import { SetUrlModel } from './set-url.model';

export type SetUrlActions = GetSetUrlResult;

export enum SetUrlActionTypes {
  SET_URL = '[SetUrl] SetUrl'
}

export class GetSetUrlResult implements Action {
  readonly type = SetUrlActionTypes.SET_URL;
  constructor(public payload: SetUrlModel) {
  }
}
