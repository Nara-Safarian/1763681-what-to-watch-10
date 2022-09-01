import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AppRoute, NameSpace} from '../constants';
import {Review} from '../types/review';
import {ServerError} from '../types/server-error';

export const changeGenre = createAction<string | undefined>(`${NameSpace.Films}/changeGenre`);
export const setCurrentFilm = createAction<Film>(`${NameSpace.Films}/setCurrentFilm`);
export const setSimilarFilms = createAction<Film[]>(`${NameSpace.Films}/setSimilarFilms`);
export const setReviews = createAction<Review[]>(`${NameSpace.Films}/setReviews`);
export const loadFilms = createAction<Film[]>(`${NameSpace.Films}/loadFilms`);
export const setFavoriteFilms = createAction<Film[]>(`${NameSpace.Films}/setFavoriteFilms`);
export const setPromoFilm = createAction<Film>(`${NameSpace.Films}/setPromoFilm`);

export const redirectToRoute = createAction<AppRoute | string>(`${NameSpace.User}/redirectToRoute`);
export const setAvatar = createAction<string>(`${NameSpace.User}/setAvatar`);

export const setError = createAction<ServerError | null | string>(`${NameSpace.AppInterface}/setError`);
export const setIsLoading = createAction<boolean>(`${NameSpace.AppInterface}/setIsLoading`);
