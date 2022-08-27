import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';
import FilmList from '../film-list/film-list';

type FilmListProps = {
  genre: Film['genre'];
  currentIdFilm: Film['id'];
}

const FILM_LIMIT = 4;

function SimilarFilmList({genre, currentIdFilm}: FilmListProps): JSX.Element {
  const films = useAppSelector((state) => state.allFilms);
  const similarFilms = films.filter((film) => film.genre === genre && film.id !== currentIdFilm).slice(0, FILM_LIMIT);

  return (
    <FilmList films={similarFilms} />
  );
}

export default SimilarFilmList;
