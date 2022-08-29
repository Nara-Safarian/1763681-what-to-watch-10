import { Review as ReviewType } from '../../types/review';
import { formatDate } from '../../utils';

type ReviewProps = {
  review: ReviewType;
};

export default function Review({ review }: ReviewProps): JSX.Element {
  const { comment, user, date, rating } = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{formatDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
