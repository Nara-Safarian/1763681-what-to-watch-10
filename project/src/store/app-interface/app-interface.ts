import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {AppInterface} from '../../types/state';
import {setIsLoading, setError} from '../action';

const initialState: AppInterface = {
  error: null,
  errorStatus: null,
  isLoading: false,
};

export const appInterface = createSlice({
  name: NameSpace.AppInterface,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setIsLoading, (state, action) => {
        state.isLoading = action.payload;
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
      });
  }
});
