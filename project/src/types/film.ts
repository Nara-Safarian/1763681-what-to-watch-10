import { Details } from './details';
import { Overview } from './overview';
import { Review } from './review';
import { Video } from './video';

export type Film = {
  id: number,
  poster: string,
  title: string,
  genre: string,
  releaseYear: string,
  overview: Overview,
  details: Details,
  reviews: Review[],
  video: Video
}
