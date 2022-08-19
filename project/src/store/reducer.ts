import {createReducer} from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import {changeGenre, filterFilmsByGenre} from './action';
import {ALL_GENRES} from '../constants';

const initialState = {
  currentGenre: ALL_GENRES,
  filmList: films,
  filteredFilms: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })

    .addCase(filterFilmsByGenre, (state) => {
      state.filteredFilms = state.filmList.filter((film) => {
        if (state.currentGenre === ALL_GENRES) {
          return true;
        }
        return film.genre === state.currentGenre;
      });
    });
});

export {reducer};
