import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus, DEFAULT_AVATAR_URL} from '../../constants';
import {User} from '../../types/state';
import { setAvatar } from '../action';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

const initialState: User = {
  authorizationStatus: AuthorizationStatus.Unknown,
  avatarUrl: DEFAULT_AVATAR_URL,
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(setAvatar, (state, action) => {
        state.avatarUrl = action.payload;
      });
  }
});
