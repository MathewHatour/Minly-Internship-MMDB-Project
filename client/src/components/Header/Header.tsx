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
import { useNavigate, useLocation } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [genreAnchorEl, setGenreAnchorEl] = useState<null | HTMLElement>(null);
  const genreMenuOpen = Boolean(genreAnchorEl);
  const isHomeActive = location.pathname === "/";

  const handleLogoClick = () => {
    if (location.pathname === "/") navigate(0);
    else navigate("/");
  };

  const handleGenreClick = (event: MouseEvent<HTMLElement>) =>
    setGenreAnchorEl(event.currentTarget);
  const handleGenreClose = () => setGenreAnchorEl(null);
  const handleGenreSelect = (genre: string) => {
    handleGenreClose();
    navigate(`/genres/${genre}`);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #E6E6E6" }}
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
          <Box
            onClick={handleLogoClick}
            sx={{
              fontFamily: "Rubik",
              fontWeight: 700,
              fontSize: "26.76px",
              lineHeight: "32px",
              color: "#418CFB",
              cursor: "pointer",
            }}
          >
            MMDB
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "34px" }}>
            <Box
              onClick={() => navigate("/")}
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "-0.025em",
                color: isHomeActive ? "#003055" : "#697586",
                cursor: "pointer",
              }}
            >
              Home
            </Box>

            <Box
              onClick={handleGenreClick}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                py: "7px",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "-0.025em",
                  color: "#697586",
                }}
              >
                Genre
              </Box>
              <ArrowDropDownIcon sx={{ color: "#697586", fontSize: "18px" }} />
            </Box>
            <Menu
              anchorEl={genreAnchorEl}
              open={genreMenuOpen}
              onClose={handleGenreClose}
            >
              <MenuItem onClick={() => handleGenreSelect("action")}>
                Action
              </MenuItem>
              <MenuItem onClick={() => handleGenreSelect("comedy")}>
                Comedy
              </MenuItem>
              <MenuItem onClick={() => handleGenreSelect("drama")}>
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
            <SearchIcon
              sx={{ width: "20px", height: "20px", color: "#697586" }}
            />
            <InputBase
              placeholder="Search"
              sx={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "-0.025em",
                color: "#697586",
                width: "100%",
              }}
            />
          </Box>

          <Box
            onClick={() => navigate("/signup")}
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#418CFB",
              cursor: "pointer",
            }}
          >
            Sign up
          </Box>

          <Button
            onClick={() => navigate("/login")}
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#FFFFFF",
              backgroundColor: "#418CFB",
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
