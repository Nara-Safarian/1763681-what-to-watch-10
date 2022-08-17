import { Fragment } from 'react';
import { Details } from '../../types/details';

type DetailsTabProp = {
  details: Details;
}

export default function DetailsTab({details}: DetailsTabProp): JSX.Element {
  const {director, starring, runTime, genre, releaseYear} = details;
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              starring.map((star, index, array) => {
                const isLastIndex = index === (array.length - 1);
                return (
                  <Fragment key={star}>
                    {star}{isLastIndex ? '' : (<>, <br/></>)}
                  </Fragment>
                );
              })
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );
}
