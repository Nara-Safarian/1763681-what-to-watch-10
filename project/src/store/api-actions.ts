import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute} from '../constants';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Film} from '../types/film';
import {loadFilms, requireAuthorization, setError, setDataLoadedStatus, redirectToRoute, setCurrentFilm, setReviews, setSimilarFilms} from './action';
import {store} from './';
import {Review} from '../types/review.js';
import { StatusCodes } from 'http-status-codes';

export const clearErrorAction = createAsyncThunk(
  'film/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'data/fetchFilms',
   async (_arg, {dispatch, extra: api}) => {
     dispatch(setDataLoadedStatus(true));
     const {data} = await api.get<Film[]>(APIRoute.Films);
     dispatch(loadFilms(data));
     dispatch(setDataLoadedStatus(false));
   },
 );

export const fetchFilmAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(setCurrentFilm(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(setReviews(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}${APIRoute.Similar}`);
    dispatch(setSimilarFilms(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/checkAuth',
   async (_arg, {dispatch, extra: api}) => {
     try {
       await api.get(APIRoute.Login);
       dispatch(requireAuthorization(AuthorizationStatus.Auth));
     } catch {
       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
     }
   },
 );

export const loginAction = createAsyncThunk<void, AuthData, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/login',
   async ({login: email, password}, {dispatch, extra: api}) => {
     const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
     saveToken(token);
     dispatch(requireAuthorization(AuthorizationStatus.Auth));
     dispatch(redirectToRoute(AppRoute.Main));
   },
 );

export const logoutAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/logout',
   async (_arg, {dispatch, extra: api}) => {
     await api.delete(APIRoute.Logout);
     dropToken();
     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
   },
 );

export const addReviewAction = createAsyncThunk<StatusCodes, {comment: string; rating: number; filmId: number | string}, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/logout',
   async ({filmId, ...data}, {dispatch, extra: api}) => {
     const response = await api.post<Review[]>(`${APIRoute.Reviews}/${filmId}`, data);

     return response.status;
     //  try {
     //    const response = await api.post<Review[]>(`${APIRoute.Reviews}/${filmId}`, data);
     //    return response.

     //  } catch ({response}) {
     //    return response as AxiosResponse<Review[]>;
     //  }
   });
