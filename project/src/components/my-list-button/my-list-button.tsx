import { useEffect, useCallback, useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { setFavoriteFilmAction, getFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/films/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { Film } from '../../types/film';

type MyListButtonProps = {
  id?: string,
}

export default function MyListButton({id}: MyListButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLogged = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(getFavoriteFilmsAction());
  }, [dispatch]);

  useEffect(() => {
    if (!favoriteFilms.length || !id) {
      setIsFavorite(false);
      return;
    }

    const favoriteFilm = favoriteFilms.find((film) => film.id === parseInt(id, 10));
    if (!favoriteFilm) {
      setIsFavorite(false);
      return;
    }
    setIsFavorite(favoriteFilm.isFavorite);
  }, [favoriteFilms, id]);

  const handleMyListClick = useCallback(async () => {
    if(!isLogged) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }

    if (!id) {
      return;
    }

    const {payload: film} = await dispatch(setFavoriteFilmAction({filmId: id, status: isFavorite ? 0 : 1}));
    dispatch(getFavoriteFilmsAction());
    setIsFavorite((film as Film).isFavorite);
  }, [isLogged, id, dispatch, isFavorite]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      {
        isFavorite
          ? (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
          )
          : (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
          )
      }
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}
