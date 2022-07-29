import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  filmTilte: string;
  filmGenre: string;
  releaseDate: string;
}

function App({filmTilte, filmGenre, releaseDate}: AppProps): JSX.Element {
  return (
    <MainPage
      filmTilte={filmTilte}
      filmGenre={filmGenre}
      releaseDate={releaseDate}
    />
  );
}

export default App;
