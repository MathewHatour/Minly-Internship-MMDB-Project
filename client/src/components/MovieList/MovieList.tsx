import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import type { Movie, MoviesResponse } from "../../types/movie";

interface MovieListProps {
  onMovieClick?: (movieId: number) => void;
}

function MovieList({ onMovieClick }: MovieListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        return response.json();
      })
      .then((data: MoviesResponse) => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          width: "1169px",
          mx: "auto",
          py: "80px",
        }}
      >
        <Typography>Loading movies...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          width: "1169px",
          mx: "auto",
          py: "80px",
        }}
      >
        <Typography>
          Unable to load movies.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "1169px",
        maxWidth: "calc(100% - 48px)",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 278px)",
        columnGap: "19px",
        rowGap: "23px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onMovieClick?.(movie.id)}
        />
      ))}
    </Box>
  );
}

export default MovieList;