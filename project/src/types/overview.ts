export type Rating = {
  rating: number;
  ratingLevel: string;
  scoresCount: number;
}

export type Overview = {
  rating: Rating,
  description: string;
  director: string;
  starring: string;
}
