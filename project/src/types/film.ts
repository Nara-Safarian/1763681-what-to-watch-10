import { Details } from './details';
import { Overview } from './overview';
import { Review } from './review';

export type Film = {
  id: number,
  poster: string,
  title: string,
  genre: string,
  releaseYear: string,
  overview: Overview,
  details: Details,
  reviews: Review[],
}
