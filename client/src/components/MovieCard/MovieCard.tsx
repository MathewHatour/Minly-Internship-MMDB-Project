import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import type { Movie } from "../../types/movie";

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "278px",
        height: "464px",
        flexShrink: 0,
        backgroundColor: "#FAFAFA",
        borderRadius: "7.728px",
        boxShadow: "0px 4.416px 33.12px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        boxSizing: "border-box",
        p: "16px 11px 0",
      }}
    >
      <Box
        component="img"
        src={movie.posterUrl ?? ""}
        alt={movie.title}
        sx={{
          display: "block",
          width: "256px",
          height: "344px",
          objectFit: "cover",
          borderRadius: "5.52px",
        }}
      />

      <Box
        sx={{
          mt: "16px",
          ml: "6.66px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "25px",
            fontFamily: "Inter",
            fontWeight: 900,
            fontSize: "16.56px",
            lineHeight: "23px",
            letterSpacing: "-0.02em",
            color: "#FEB600",
          }}
        >
          <StarIcon
            sx={{
              fontSize: "18px",
              mr: "3px",
            }}
          />

          {movie.averageRating !== null
            ? movie.averageRating.toFixed(1)
            : "—"}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <Box
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "17.664px",
              lineHeight: "21px",
              letterSpacing: "0.02em",
              color: "#1A2C59",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {movie.title}
          </Box>

          <Box
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "15.456px",
              lineHeight: "25px",
              color: "#7C7C7C",
            }}
          >
            {movie.releaseYear}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieCard;