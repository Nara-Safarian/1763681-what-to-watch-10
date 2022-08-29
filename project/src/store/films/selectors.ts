import { createSelector } from 'reselect';

import {ALL_GENRES, NameSpace} from '../../constants';
import {Film} from '../../types/film';
import {Review} from '../../types/review';
import {State} from '../../types/state';

export const getAllFilms = (state: State): Film[] => state[NameSpace.Films].allFilms;
export const getCurrentFilm = (state: State): Film | undefined => state[NameSpace.Films].currentFilm;
export const getCurrentGenre = (state: State): string => state[NameSpace.Films].currentGenre;
export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.Films].promoFilm;
export const getReviews = (state: State): Review[] | undefined => state[NameSpace.Films].reviews;
export const getSimilarFilms = (state: State): Film[] | undefined => state[NameSpace.Films].similarFilms;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Films].favoriteFilms ?? [];


export const getFilteredFilms = createSelector(
  [getAllFilms, getCurrentGenre],
  (allFilms, currentGenre) => allFilms.filter((film) => {
    if (currentGenre === ALL_GENRES) {
      return true;
    }
    return film.genre === currentGenre;
  })
);
