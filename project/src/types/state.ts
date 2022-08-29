import { StatusCodes } from 'http-status-codes';
import { AuthorizationStatus } from '../constants.js';
import {store} from '../store/index.js';
import { Film } from './film.js';
import { Review } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type User = {
  authorizationStatus: AuthorizationStatus,
  avatarUrl: string;
}

export type Films = {
  currentGenre: string,
  allFilms: Film[],
  favoriteFilms?: Film[],
  similarFilms?: Film[],
  reviews?: Review[],
  promoFilm?: Film,
  currentFilm?: Film,
}

export type AppInterface = {
  error: string | null,
  errorStatus: StatusCodes | null,
  isLoading: boolean,
}
