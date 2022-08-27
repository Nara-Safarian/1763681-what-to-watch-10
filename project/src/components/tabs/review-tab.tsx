import { Review as ReviewType} from '../../types/review';
import Review from './review';

type ReviewTabProps = {
  reviews?: ReviewType[];
};

export default function ReviewTab({ reviews }: ReviewTabProps): JSX.Element {
  if (!reviews || reviews.length === 0) {
    return (<span>Sorry. No reviews yet.</span>);
  }

  let column1: ReviewType[] = [];
  let column2: ReviewType[] = [];

  if (reviews.length > 1) {
    const half = Math.ceil(reviews.length / 2);
    column1 = reviews.slice(0, half);
    column2 = reviews.slice(half, reviews.length);
  } else {
    column1.push(reviews[0]);
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {column1.map((review) => <Review review={review} key={`${review.date}-${review.user.id}`} />)}
      </div>
      <div className="film-card__reviews-col">
        {column2.map((review) => <Review review={review} key={`${review.date}-${review.user.id}`} />)}
      </div>
    </div>
  );
}
