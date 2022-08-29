import {useState, useMemo} from 'react';
import { getFilmLink } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute, setError } from '../../store/action';
import { addReviewAction } from '../../store/api-actions';
import { getError } from '../../store/app-interface/selectors';
import Rating from '../rating/rating';

const MIN_STARS_COUNT = 1;
const MIN_COMMENT_LENGTH = 50;

type AddReviewProps = {
  filmId: number | string;
}

function AddReview({filmId}: AddReviewProps): JSX.Element {
  const error = useAppSelector(getError);
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState({
    star: 0,
    comment: '',
    isPending: false,
  });

  const setComment = (comment: string) => {
    setFormState((state) => ({
      ...state,
      comment
    }));
  };

  const setStar = (star: number) => {
    setFormState((state) => ({
      ...state,
      star
    }));
  };

  const setIsPending = (isPending: boolean) => {
    setFormState((state) => ({
      ...state,
      isPending
    }));
  };

  const handleReviewChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const {star, comment, isPending} = formState;

  const handleSubmit = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(setError(null));
    setIsPending(true);
    const result = await dispatch(addReviewAction({comment, rating: star, filmId}));
    const isSuccess = result.payload as boolean;

    if (isSuccess) {
      dispatch(redirectToRoute(getFilmLink(filmId)));
      return;
    }

    setIsPending(false);
    dispatch(setError('Oops .Something is wrong. Try again.'));
  };

  const isSubmitDisabled = useMemo(() => {
    if (star < MIN_STARS_COUNT) {
      return true;
    }

    if (comment.length < MIN_COMMENT_LENGTH) {
      return true;
    }

    return false;
  }, [star, comment]);


  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating disabled={isPending} star={star} onClick={(ratingStar: number) => setStar(ratingStar)}/>
        {error && <span>{error}</span>}
        <div className="add-review__text">
          <textarea
            onChange={handleReviewChange}
            value={comment}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            disabled={isPending}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
