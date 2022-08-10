import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import PrivateRoute from '../private-page/private-page';
import { Film } from '../../types/film';
import FilmPage from '../../pages/film-page/film-page';

type AppProps = {
  filmTitle: string;
  filmGenre: string;
  releaseDate: string;
  films: Film[];
}

function App({filmTitle, filmGenre, releaseDate, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              filmTitle={filmTitle}
              filmGenre={filmGenre}
              releaseDate={releaseDate}
              films={films}
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
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage posterSrc={films[0].poster} filmTitle={films[0].title} />}
        />
        <Route
          path={AppRoute.Player}
          element={(
            <PlayerPage
              filmTitle={films[0].title}
              runTime={films[0].details.runTime}
              videoUrl={films[0].video.url}
            />
          )}
        />
        <Route path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
