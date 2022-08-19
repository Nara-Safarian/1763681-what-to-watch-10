import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('film/changeGenre');
export const filterFilmsByGenre = createAction('film/filterFilmsByGenre');
