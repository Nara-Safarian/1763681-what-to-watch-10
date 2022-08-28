import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, ALL_GENRES} from '../../constants';
import {Films} from '../../types/state';
import { changeGenre, loadFilms, setCurrentFilm, setSimilarFilms, setReviews, setFavoriteFilms, setPromoFilm } from '../action';

const initialState: Films = {
  currentGenre: ALL_GENRES,
  allFilms: [],
};

export const films = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeGenre, (state, action) => {
        state.currentGenre = action.payload;
      })

      .addCase(loadFilms, (state, action) => {
        state.allFilms = action.payload;
      })

      .addCase(setCurrentFilm, (state, action) => {
        state.currentFilm = action.payload;
      })

      .addCase(setSimilarFilms, (state, action) => {
        state.similarFilms = action.payload;
      })

      .addCase(setReviews, (state, action) => {
        state.reviews = action.payload;
      })

      .addCase(setPromoFilm, (state, action) => {
        state.promoFilm = action.payload;
      })

      .addCase(setFavoriteFilms, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
