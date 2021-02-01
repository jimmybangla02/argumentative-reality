import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';
import {getAuthDetails} from "../auth/auth.selector";

export const getUserDetailState = createSelector((state: AppState) => state, (state: AppState) => state.IUserDetails);

export const getUserDetails = () => createSelector(
  getUserDetailState,
  (d) => d !== null ? d : null
);


export const getUser = () => createSelector(
  getUserDetails(),
  (d) => d !== null ? d.user : null
);

export const getUserName = () => createSelector(
  getUser(),
  (d: any) => d  ? d.fullname : null
);

export const getUserId = () => createSelector(
  getUser(),
  // (d: any) => d ? 'AKIENDL' : null
  (d: any) => d ? d.id : null
);

export const getUserMail = () => createSelector(
  getUser(),
  (d: any) => d.email && d.email !== null ? d.email : null
);

export const isExternalUser = () => createSelector(
  getUserDetails(),
  (d: any) =>  {
    let isExtenalUsr = false;
    if (d && d.principalMap) {
      const authString = d.principalMap.dn;
      if (authString && authString.indexOf('ou=external') !== -1) {
        isExtenalUsr = true;
      }
    }
    return isExtenalUsr;
  }
);
