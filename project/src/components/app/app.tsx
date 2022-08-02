import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReview from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import FilmCard from '../film-card/film-card';
import PrivateRoute from '../private-page/private-page';

type AppProps = {
  filmTilte: string;
  filmGenre: string;
  releaseDate: string;
}

function App({filmTilte, filmGenre, releaseDate}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              filmTilte={filmTilte}
              filmGenre={filmGenre}
              releaseDate={releaseDate}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmCard />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
