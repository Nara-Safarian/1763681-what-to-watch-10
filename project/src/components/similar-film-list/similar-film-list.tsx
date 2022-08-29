import { Film } from '../../types/film';
import FilmList from '../film-list/film-list';

type FilmListProps = {
  films: Film[];
}

const FILM_LIMIT = 4;

function SimilarFilmList({films}: FilmListProps): JSX.Element {
  return (
    <FilmList films={films.slice(0, FILM_LIMIT)} />
  );
}

export default SimilarFilmList;
