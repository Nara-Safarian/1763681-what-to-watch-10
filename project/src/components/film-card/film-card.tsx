/* eslint-disable arrow-body-style */
import {Link} from 'react-router-dom';

type FilmCardProps = {
  posterSrc: string;
  filmTitle: string;
  filmId: number;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

function FilmCard({posterSrc, filmTitle, filmId, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={posterSrc} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmId}`}>{filmTitle}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
