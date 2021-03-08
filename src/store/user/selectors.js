import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getLoginErrorStatus = (state) => state[NameSpace.DATA].isLoginError;
