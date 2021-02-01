import { UserDetails } from './user.model';

export interface UserDetailsState extends UserDetails {
  principalMap: any | null;
  scopes: any | null;
  user: any | null;
}

export const initialUserDetailsState: UserDetailsState = {
  principalMap: null,
  scopes: [],
  user: null
};
