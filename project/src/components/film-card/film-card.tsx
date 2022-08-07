import {Link} from 'react-router-dom';

type FilmCardProps = {
  posterSrc: string;
  filmTitle: string;
  filmId: number;
}

function FilmCard({posterSrc, filmTitle, filmId}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
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
