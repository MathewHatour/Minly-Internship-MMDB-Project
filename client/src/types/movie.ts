export interface Movie {
  id: number;
  uuid: string;
  title: string;
  releaseYear: number;
  runtimeMinutes: number | null;
  overview: string | null;
  posterUrl: string | null;
  trailerUrl: string | null;
  language: string | null;
  averageRating: number | null;
}

export interface MoviesResponse {
  data: Movie[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}