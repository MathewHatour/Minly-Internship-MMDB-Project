import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  const [genreAnchorEl, setGenreAnchorEl] = useState<null | HTMLElement>(null);
  const genreMenuOpen = Boolean(genreAnchorEl);
  const isHomeActive = location.pathname === "/";

  const handleGenreClick = (event: MouseEvent<HTMLElement>) =>
    setGenreAnchorEl(event.currentTarget);
  const handleGenreClose = () => setGenreAnchorEl(null);

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "72px !important",
          px: "clamp(24px, calc((100vw - 1170px) / 2), 135px)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left group */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "61.78px" }}>
          <Link
            to="/"
            onClick={() => {
              if (isHomeActive) {
                window.location.reload();
              }
            }}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                fontFamily: "Rubik",
                fontWeight: 700,
                fontSize: "26.76px",
                lineHeight: "32px",
                color: "primary.main",
                cursor: "pointer",
              }}
            >
              MMDB
            </Box>
          </Link>

          <Box sx={{ display: "flex", alignItems: "center", gap: "34px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "-0.025em",
                  color: isHomeActive ? "text.primary" : "text.secondary",
                  cursor: "pointer",
                }}
              >
                Home
              </Box>
            </Link>

            <Button
              onClick={handleGenreClick}
              endIcon={<ArrowDropDownIcon sx={{ fontSize: "18px" }} />}
              sx={{
                color: "text.secondary",
                px: "2px",
                py: "7px",
                minWidth: 0,
              }}
            >
              Genre
            </Button>
            <Menu
              anchorEl={genreAnchorEl}
              open={genreMenuOpen}
              onClose={handleGenreClose}
            >
              <MenuItem component={Link} to="/genres/action" onClick={handleGenreClose}>
                Action
              </MenuItem>
              <MenuItem component={Link} to="/genres/comedy" onClick={handleGenreClose}>
                Comedy
              </MenuItem>
              <MenuItem component={Link} to="/genres/drama" onClick={handleGenreClose}>
                Drama
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Right group */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "227px",
              height: "48px",
              px: "16px",
              boxSizing: "border-box",
              border: "1px solid #E5E5E5",
              borderRadius: "60px",
            }}
          >
            <SearchIcon sx={{ width: "20px", height: "20px", color: "text.secondary" }} />
            <InputBase
              placeholder="Search"
              sx={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "-0.025em",
                color: "text.secondary",
                width: "100%",
              }}
            />
          </Box>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                color: "primary.main",
                cursor: "pointer",
              }}
            >
              Sign up
            </Box>
          </Link>

          <Button
            component={Link}
            to="/login"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#FFFFFF",
              backgroundColor: "primary.main",
              px: "26px",
              py: "10px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#2f76e0" },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;