import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmTitle='The Grand Budapest Hotel'
        filmGenre='Drama'
        releaseDate='2014'
        films={films}
      />
    </Provider>
  </React.StrictMode>,
);
