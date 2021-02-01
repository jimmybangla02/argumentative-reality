export interface UserDetails {
  principalMap: PrincipalMap;
  scopes: Scope[];
  user: User;
}

export interface User {
  id: string;
  createdAt: number;
  lastModifiedAt: number;
  createdBy: string;
  lastModifiedBy: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

export interface Scope {
  id: string;
  createdAt: number;
  lastModifiedAt: number;
  createdBy: string;
  lastModifiedBy: string;
  description: string;
  name: string;
}

export interface PrincipalMap {
  companyName: string;
}
