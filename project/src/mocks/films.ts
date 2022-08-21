import { Film } from '../types/film';
import { fantasticBeastsDetails, bohemianRhapsodyDetails, macbethDetails, aviatorDetails} from './details';
import { fantasticBeastsOverview, bohemianRhapsodyOverview, macbethOverview, aviatorOverview } from './overview';
import { reviews } from './reviews';
import { video } from './video';

export const films: Film[] = [
  {
    id: 3456,
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'fantasy',
    releaseYear: '2018',
    overview: fantasticBeastsOverview,
    details: fantasticBeastsDetails,
    reviews,
    video
  },
  {
    id: 678,
    poster: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    genre: 'musical',
    releaseYear: '2018',
    overview: bohemianRhapsodyOverview,
    details: bohemianRhapsodyDetails,
    reviews,
    video
  },
  {
    id: 3545,
    poster: 'img/macbeth.jpg',
    title: 'Macbeth',
    genre: 'drama',
    releaseYear: '2015',
    overview: macbethOverview,
    details: macbethDetails,
    reviews,
    video
  },
  {
    id: 68768,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
  {
    id: 456,
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'fantasy',
    releaseYear: '2018',
    overview: fantasticBeastsOverview,
    details: fantasticBeastsDetails,
    reviews,
    video
  },
  {
    id: 98865,
    poster: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    genre: 'musical',
    releaseYear: '2018',
    overview: bohemianRhapsodyOverview,
    details: bohemianRhapsodyDetails,
    reviews,
    video
  },
  {
    id: 3356,
    poster: 'img/macbeth.jpg',
    title: 'Macbeth',
    genre: 'drama',
    releaseYear: '2015',
    overview: macbethOverview,
    details: macbethDetails,
    reviews,
    video
  },
  {
    id: 576687,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
  {
    id: 988565,
    poster: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    genre: 'musical',
    releaseYear: '2018',
    overview: bohemianRhapsodyOverview,
    details: bohemianRhapsodyDetails,
    reviews,
    video
  },
  {
    id: 33556,
    poster: 'img/macbeth.jpg',
    title: 'Macbeth',
    genre: 'drama',
    releaseYear: '2015',
    overview: macbethOverview,
    details: macbethDetails,
    reviews,
    video
  },
  {
    id: 5576687,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
  {
    id: 12239995954,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
  {
    id: 5576688,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
  {
    id: 5576689,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
  {
    id: 111213,
    poster: 'img/aviator.jpg',
    title: 'Aviator',
    genre: 'drama',
    releaseYear: '2004',
    overview: aviatorOverview,
    details: aviatorDetails,
    reviews,
    video
  },
];
