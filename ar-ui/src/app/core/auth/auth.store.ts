import { AuthDetailsModel } from './auth.model';

export interface AuthDetailsState extends AuthDetailsModel {
  id: string | null;
}

export const initialAuthDetailsState: AuthDetailsState = {
  id: null,
  authDetails: null
};
