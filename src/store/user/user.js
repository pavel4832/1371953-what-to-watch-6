import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setLoginError, setLoginInfo} from '../actions';
import {AuthorizationStatus} from '../../const';
import {adaptUserToApp} from '../../utils/adaptor';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isLoginError: false,
  user: {}
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
  builder.addCase(setLoginError, (state) => {
    return {
      ...state,
      isLoginError: true,
    };
  });
  builder.addCase(setLoginInfo, (state, action) => {
    return {
      ...state,
      user: adaptUserToApp(action.payload),
    };
  });
});

export {user};
