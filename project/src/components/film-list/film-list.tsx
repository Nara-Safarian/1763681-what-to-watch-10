import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActiveFilm] = useState<Film>();

  return (
    <>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          posterSrc={film.poster}
          filmTitle={film.title}
          filmId={film.id}
          onMouseEnter={() => setActiveFilm(film)}
          onMouseLeave={() => setActiveFilm(undefined)}
        />
      ))}
    </>
  );
}

export default FilmList;
