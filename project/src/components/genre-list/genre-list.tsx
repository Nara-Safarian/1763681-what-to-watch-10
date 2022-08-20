import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filterFilmsByGenre } from '../../store/action';

type GenreListProps = {
  genres: string[];
}

const activeGenreClass = 'catalog__genres-item--active';

function GenreList({genres}: GenreListProps): JSX.Element {
  const {currentGenre} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li key={genre} className={`catalog__genres-item ${currentGenre === genre ? activeGenreClass : ''}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(event) => {
                event.preventDefault();
                dispatch(changeGenre(genre));
                dispatch(filterFilmsByGenre());
              }}
            >
              {genre}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default GenreList;
