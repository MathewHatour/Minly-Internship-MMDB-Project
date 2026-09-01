import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MovieList from "../../components/MovieList/MovieList";
import type { SortOption } from "../../components/MovieList/MovieList";

function Homepage() {
  const [sort, setSort] = useState<SortOption>("year_desc");
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const sortMenuOpen = Boolean(sortAnchorEl);

  const handleSelect = (option: SortOption) => {
    setSort(option);
    setSortAnchorEl(null);
  };

  return (
    <main>
      <Box
        sx={{
          width: "1169px",
          maxWidth: "calc(100% - 48px)",
          mx: "auto",
          py: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "39px",
            color: "#003055",
          }}
        >
          All Movies
        </Typography>

        <Button
          onClick={(event) => setSortAnchorEl(event.currentTarget)}
          startIcon={<FilterAltIcon />}
          sx={{
            height: "40px",
            px: "16px",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "-0.025em",
            color: "text.secondary",
            textTransform: "none",
            gap: "10px",
            border: "1px solid #E5E5E5",
            borderRadius: "60px",
          }}
        >
          Sort by
        </Button>
        <Menu
          anchorEl={sortAnchorEl}
          open={sortMenuOpen}
          onClose={() => setSortAnchorEl(null)}
        >
          <MenuItem onClick={() => handleSelect("year_desc")}>Newest</MenuItem>
          <MenuItem onClick={() => handleSelect("year_asc")}>Oldest</MenuItem>
        </Menu>
      </Box>

      <MovieList key={sort} sort={sort} />
    </main>
  );
}

export default Homepage;
