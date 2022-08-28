/* eslint-disable arrow-body-style */
import {Link} from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film
  isVideoOn: boolean;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

function FilmCard({film, onMouseEnter, onMouseLeave, isVideoOn}: FilmCardProps): JSX.Element {
  const {posterImage, name, id} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {
        isVideoOn
          ? (
            <VideoPlayer film={film} autoPlay />
          )
          : (
            <>
              <div className="small-film-card__image">
                <img src={posterImage} alt={name} width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
              </h3>
            </>
          )
      }
    </article>
  );
}

export default FilmCard;
