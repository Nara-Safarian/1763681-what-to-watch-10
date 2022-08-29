import { StatusCodes } from 'http-status-codes';
import {NameSpace} from '../../constants';
import {State} from '../../types/state';

export const getError = (state: State): string | null => state[NameSpace.AppInterface].error;
export const getErrorStatus = (state: State): StatusCodes | null => state[NameSpace.AppInterface].errorStatus;
export const getIsLoading = (state: State): boolean => state[NameSpace.AppInterface].isLoading;
