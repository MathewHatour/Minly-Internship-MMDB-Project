import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

  const handlePageChange = (nextPage: number) => {
    setLoading(true);
    setError(false);
    setPage(nextPage);
  };

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
          gap: "8px",
          mt: "40px",
        }}
      >
        <Button
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
          sx={{ minWidth: "32px", minHeight: "32px", width: "32px", height: "32px", p: 0 }}
        >
          <ChevronLeftIcon />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
          const isActive = num === page;
          return (
            <Button
              key={num}
              onClick={() => handlePageChange(num)}
              sx={{
                minWidth: "32px",
                height: "32px",
                p: 0,
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                color: isActive ? "#418CFB" : "#003055",
                backgroundColor: "#FFFFFF",
                border: isActive ? "1px solid #418CFB" : "1px solid #DFE3E8",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#FFFFFF" },
              }}
            >
              {num}
            </Button>
          );
        })}

        <Button
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
          sx={{ minWidth: "32px", minHeight: "32px", width: "32px", height: "32px", p: 0 }}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default MovieList;
