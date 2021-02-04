import {SetUrlModel} from './set-url.model';


export interface SetUrlState extends SetUrlModel {
  id: string | null;
}

export const initialSetUrlState: SetUrlState = {
  id: null,
  result: null
};
