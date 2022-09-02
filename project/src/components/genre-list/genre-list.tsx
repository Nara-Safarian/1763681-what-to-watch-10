import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import { getCurrentGenre } from '../../store/films/selectors';

type GenreListProps = {
  genres: string[];
}

const activeGenreClass = 'catalog__genres-item--active';

function GenreList({genres}: GenreListProps): JSX.Element {
  const currentGenre = useAppSelector(getCurrentGenre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li key={genre} className={`catalog__genres-item ${currentGenre === genre ? activeGenreClass : ''}`}>
            <span
              className="catalog__genres-link"
              onClick={(event) => {
                dispatch(changeGenre(genre));
              }}
            >
              {genre}
            </span>
          </li>
        ))
      }
    </ul>
  );
}

export default GenreList;
