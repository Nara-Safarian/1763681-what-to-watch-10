import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, filterFilmsByGenre, loadFilms, requireAuthorization, setError, setDataLoadedStatus, setCurrentFilm, setSimilarFilms, setReviews} from './action';
import {ALL_GENRES, AuthorizationStatus} from '../constants';
import { Film } from '../types/film';
import { Review } from '../types/review';
import {StatusCodes} from 'http-status-codes';

type InitalState = {
  currentGenre: string,
  allFilms: Film[],
  filteredFilms: Film[],
  similarFilms?: Film[],
  reviews?: Review[],
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  errorStatus: StatusCodes | null,
  promoFilm?: Film,
  currentFilm?: Film,
  isDataLoaded: boolean
}

const initialState: InitalState = {
  currentGenre: ALL_GENRES,
  allFilms: [],
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  errorStatus: null,
  isDataLoaded: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })

    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })

    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.filteredFilms = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setError, (state, action) => {
      let message = null;
      let status = null;
      if (typeof action.payload === 'string') {
        message = action.payload;
      }
      if (typeof action.payload === 'object' && action.payload !== null) {
        message = action.payload.message;
        status = action.payload.status;
      }
      state.error = message;
      state.errorStatus = status;
    })

    .addCase(filterFilmsByGenre, (state) => {
      state.filteredFilms = state.allFilms.filter((film) => {
        if (state.currentGenre === ALL_GENRES) {
          return true;
        }
        return film.genre === state.currentGenre;
      });
    })

    .addCase(setCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })

    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })

    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
