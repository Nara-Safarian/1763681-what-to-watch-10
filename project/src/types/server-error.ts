import {StatusCodes} from 'http-status-codes';

export type ServerError = {
  message: string | null;
  status: StatusCodes;
}
