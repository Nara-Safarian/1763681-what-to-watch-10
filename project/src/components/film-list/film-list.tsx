import { useRef, useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

const TIMER_DELAY_MS = 1000;

function FilmList({films}: FilmListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<Film>();
  const timerIdRef = useRef<TimeoutHack>(undefined);

  const handleMouseEnter = (film: Film) => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      setActiveFilm(undefined);
    }

    timerIdRef.current = setTimeout(() => {
      setActiveFilm(film);
      timerIdRef.current = undefined;
    }, TIMER_DELAY_MS);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerIdRef.current);
    setActiveFilm(undefined);
  };

  return (
    <>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseEnter={() => handleMouseEnter(film)}
          onMouseLeave={handleMouseLeave}
          isVideoOn={film.id === activeFilm?.id}
        />
      ))}
    </>
  );
}

export default FilmList;
