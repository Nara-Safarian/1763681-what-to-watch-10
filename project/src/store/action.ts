import {createAction} from '@reduxjs/toolkit';
import { Film } from '../types/film';
import {AuthorizationStatus, AppRoute} from '../constants';
import { Review } from '../types/review';
import { ServerError } from '../types/server-error';

export const changeGenre = createAction<string>('film/changeGenre');
export const filterFilmsByGenre = createAction('film/filterFilmsByGenre');
export const setCurrentFilm = createAction<Film>('film/setCurrentFilm');
export const setSimilarFilms = createAction<Film[]>('film/setSimilarFilms');
export const setReviews = createAction<Review[]>('film/setReviews');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<ServerError | null | string>('film/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute | string>('signin/redirectToRoute');

