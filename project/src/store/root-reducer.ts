import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {films} from './films/films';
import {appInterface} from './app-interface/app-interface';
import {user} from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Films]: films.reducer,
  [NameSpace.AppInterface]: appInterface.reducer,
  [NameSpace.User]: user.reducer,
});
