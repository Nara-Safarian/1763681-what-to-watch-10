import { Overview, Rating } from '../types/overview';
import { getRandomNumber } from '../utils';

const fantasticBeastsRating: Rating = {
  ratingScore: getRandomNumber(1, 10),
  ratingLevel: 'Very good',
  ratingCount: getRandomNumber(0, 10000)
};
export const fantasticBeastsOverview: Overview = {
  rating: fantasticBeastsRating,
  description: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
  director: 'David Yates',
  starring: 'Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Zoë Kravitz, Callum Turner, Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law, Johnny Depp'
};

const bohemianRhapsodyRating: Rating = {
  ratingScore: getRandomNumber(1, 10),
  ratingLevel: 'Very good',
  ratingCount: getRandomNumber(0, 10000)
};
export const bohemianRhapsodyOverview: Overview = {
  rating: bohemianRhapsodyRating,
  description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
  director: 'Bryan Singer',
  starring: 'Rami Malek,Lucy Boynton, Gwilym Lee, Ben Hardy'
};

const macbethRating: Rating = {
  ratingScore: getRandomNumber(1, 10),
  ratingLevel: 'Good',
  ratingCount: getRandomNumber(0, 10000)
};
export const macbethOverview: Overview = {
  rating: macbethRating,
  description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
  director: 'Justin Kurzel',
  starring: 'Michael Fassbender, Marion Cotillard, Paddy Considine ,Sean Harris',
};

const aviatorRating: Rating = {
  ratingScore: getRandomNumber(1, 10),
  ratingLevel: 'Very good',
  ratingCount: getRandomNumber(0, 10000)
};
export const aviatorOverview: Overview = {
  rating: aviatorRating,
  description: 'A biopic depicting the early years of legendary director and aviator Howard Hughes career from the late 1920s to the mid 1940s.',
  director: 'Martin Scorsese',
  starring: 'Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale, John C. Reilly',
};
