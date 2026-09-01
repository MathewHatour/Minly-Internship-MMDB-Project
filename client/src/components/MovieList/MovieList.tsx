import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import type { Movie, MoviesResponse } from "../../types/movie";

export type SortOption = "year_desc" | "year_asc";

interface MovieListProps {
  sort: SortOption;
  onMovieClick?: (movieId: number) => void;
}

const API_URL = "http://localhost:3000/movies";

function MovieList({ sort, onMovieClick }: MovieListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [sort]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`${API_URL}?page=${page}&sort=${sort}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        return response.json();
      })
      .then((data: MoviesResponse) => {
        setMovies(data.data);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [page, sort]);

  const grid = (
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

  const message = (text: string) => (
    <Box
      sx={{
        width: "1169px",
        maxWidth: "calc(100% - 48px)",
        mx: "auto",
        py: "80px",
      }}
    >
      <Typography>{text}</Typography>
    </Box>
  );

  if (loading) {
    return message("Loading movies...");
  }

  if (error) {
    return message("Unable to load movies.");
  }

  if (movies.length === 0) {
    return message("No movies found.");
  }

  return (
    <Box sx={{ pb: "64px" }}>
      {grid}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          mt: "40px",
        }}
      >
        <Button
          variant="outlined"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <Typography>
          Page {page} of {totalPages}
        </Typography>
        <Button
          variant="outlined"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default MovieList;
