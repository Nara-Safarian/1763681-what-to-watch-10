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

function FilmCard({film: {poster, title, id, video}, onMouseEnter, onMouseLeave, isVideoOn}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {
        isVideoOn
          ? (
            <VideoPlayer src={video.url} poster={poster} autoPlay />
          )
          : (
            <>
              <div className="small-film-card__image">
                <img src={poster} alt={title} width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
              </h3>
            </>
          )
      }
    </article>
  );
}

export default FilmCard;
