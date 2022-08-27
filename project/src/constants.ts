export const ALL_GENRES = 'All genres';

export const FILMS_PER_STEP = 8;

export const TIMEOUT_SHOW_ERROR = 10000;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404'
}

export function getAddReviewLink(id: string | number) {
  return `/films/${id}/review`;
}

export function getFilmLink(id: string | number) {
  return `/films/${id}`;
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Similar = '/similar',
  Promo = '/promo',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}
