import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, TIMEOUT_SHOW_ERROR, AppRoute, NameSpace} from '../constants';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Film} from '../types/film';
import {loadFilms, setError, setIsLoading, redirectToRoute, setCurrentFilm, setReviews, setSimilarFilms, setFavoriteFilms, setPromoFilm, setAvatar} from './action';
import {Review} from '../types/review.js';
import {StatusCodes} from 'http-status-codes';
import {User} from '../types/user.js';

export const clearErrorAction = createAsyncThunk(
  `${NameSpace.AppInterface}/clearError`,
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.Films}/fetchFilms`,
   async (_arg, {dispatch, extra: api}) => {
     dispatch(setIsLoading(true));
     const {data} = await api.get<Film[]>(APIRoute.Films);
     dispatch(loadFilms(data));
     dispatch(setIsLoading(false));
   },
 );

export const fetchFilmAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  `${NameSpace.Films}/fetchFilm`,
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
  `${NameSpace.Films}/fetchReviewsAction`,
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
  `${NameSpace.Films}/fetchSimilarFilms`,
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
   `${NameSpace.User}/checkAuth`,
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<User>(APIRoute.Login);
     dispatch(setAvatar(data.avatarUrl));
   },
 );

export const loginAction = createAsyncThunk<void, AuthData, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.User}/login`,
   async ({login: email, password}, {dispatch, extra: api}) => {
     const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
     dispatch(setAvatar(avatarUrl));
     saveToken(token);
     dispatch(redirectToRoute(AppRoute.Main));
   },
 );

export const logoutAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.User}/logout`,
   async (_arg, {dispatch, extra: api}) => {
     await api.delete(APIRoute.Logout);
     dropToken();
   },
 );

export const addReviewAction = createAsyncThunk<boolean, {comment: string; rating: number; filmId: number | string}, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.Films}/addReviewAction`,
   async ({filmId, ...data}, {dispatch, extra: api}) => {
     const response = await api.post<Review[]>(`${APIRoute.Reviews}/${filmId}`, data);

     return response.status === StatusCodes.OK;
   });

export const getPromoFilmAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.Films}/getPromoFilmAction`,
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<Film>(`${APIRoute.Promo}`);
     dispatch(setPromoFilm(data));
   });

export const getFavoriteFilmsAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.Films}/getFavoriteFilmsAction`,
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<Film[]>(`${APIRoute.MyList}`);
     dispatch(setFavoriteFilms(data));
   });

export const setFavoriteFilmAction = createAsyncThunk<Film, {filmId: number | string; status: number}, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   `${NameSpace.Films}/setFavoriteFilmAction`,
   async ({filmId, status}, {dispatch, extra: api}) => {
     const {data} = await api.post<Film>(`${APIRoute.MyList}/${filmId}/${status}`);
     return data;
   });
