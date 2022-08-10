export type Rating = {
  ratingScore: number;
  ratingLevel: string;
  ratingCount: number;
}

export type Overview = {
  rating: Rating,
  description: string;
  director: string;
  starring: string;
}
