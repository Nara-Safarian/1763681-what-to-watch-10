import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import PrivateRoute from '../private-page/private-page';
import FilmPage from '../../pages/film-page/film-page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {isCheckedAuth} from '../../utils';

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage />
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
              authorizationStatus={authorizationStatus}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={(
            <FilmPage />
          )}
        />
        <Route
          path={AppRoute.AddReview}
          element={(
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewPage />
            </PrivateRoute>
          )}
        />
        <Route
          path={AppRoute.Player}
          element={(
            <PlayerPage />
          )}
        />
        <Route path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
