import { Overview } from '../../types/overview';

type OverviewTabProps = {
  overview: Overview;
}

export default function OverviewTab({overview}: OverviewTabProps): JSX.Element {
  const {
    rating: {ratingCount, ratingLevel, ratingScore},
    description,
    director,
    starring
  } = overview;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{ratingCount} rating{ratingCount > 1 ? 's' : ''}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
}
