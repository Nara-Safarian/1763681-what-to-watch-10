import { Review as ReviewType } from '../../types/review';

type ReviewProps = {
  review: ReviewType;
};

export default function Review({ review }: ReviewProps): JSX.Element {
  const { text, userName, date, ratingScore } = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ratingScore}</div>
    </div>
  );
}
