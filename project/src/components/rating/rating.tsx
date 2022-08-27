import { Fragment } from 'react';

type RatingProps = {
  star: number;
  onClick: (star: number) => void;
  maxStars?: number;
  disabled?: boolean;
}

export default function Rating({disabled = false, star, onClick, maxStars = 10}: RatingProps): JSX.Element {
  const ratings = Array.from(Array(maxStars + 1).keys()).reverse().splice(0, maxStars);

  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratings.map((rating) => {
            const isChecked = rating === star;

            return (
              <Fragment key={rating}>
                <input
                  className="rating__input"
                  id={`star-${rating}`}
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={isChecked}
                  onClick={(evt) => {
                    if (disabled) {
                      return;
                    }
                    const newStar = evt.currentTarget.value;
                    onClick(parseInt(newStar, 10));
                  }}
                  readOnly
                />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </Fragment>
            );
          })
        }
      </div>
    </div>
  );
}
