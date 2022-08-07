import { Film } from '../types/film';
import { fantasticBeastsDetails, bohemianRhapsodyDetails, macbethDetails, aviatorDetails} from './details';
import { fantasticBeastsOverview, bohemianRhapsodyOverview, macbethOverview, aviatorOverview } from './overview';
import { reviews } from './reviews';

export const films: Film[] = [
  {
    id: 3456,
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'fantasy',
    releaseYear: '2018',
    overview: fantasticBeastsOverview,
    details: fantasticBeastsDetails,
    reviews
  },
  {
    id: 678,
    poster: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    genre: 'musical',
    releaseYear: '2018',
    overview: bohemianRhapsodyOverview,
    details: bohemianRhapsodyDetails,
    reviews
  },
  {
    id: 3545,
    poster: 'img/macbeth.jpg',
    title: 'Macbeth',
    genre: 'drama',
    releaseYear: '2015',
    overview: macbethOverview,
    details: macbethDetails,
    reviews
  },
  {
    id: 68768,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews
  },
  {
    id: 456,
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'fantasy',
    releaseYear: '2018',
    overview: fantasticBeastsOverview,
    details: fantasticBeastsDetails,
    reviews
  },
  {
    id: 98865,
    poster: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    genre: 'musical',
    releaseYear: '2018',
    overview: bohemianRhapsodyOverview,
    details: bohemianRhapsodyDetails,
    reviews
  },
  {
    id: 3356,
    poster: 'img/macbeth.jpg',
    title: 'Macbeth',
    genre: 'drama',
    releaseYear: '2015',
    overview: macbethOverview,
    details: macbethDetails,
    reviews
  },
  {
    id: 576687,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews
  }];
