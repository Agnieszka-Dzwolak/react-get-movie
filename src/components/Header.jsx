import PropTypes from "prop-types";

import { Typography, AppBar, CssBaseline, Toolbar } from "@mui/material";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";

const Header = ({ title }) => {
  return (
    <header>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "center", gap: 2, mt: 2, mb: 2 }}>
          <LocalMoviesRoundedIcon sx={{ fontSize: 40 }} />
          <Typography variant="h3">{title}</Typography>
          <LocalMoviesRoundedIcon sx={{ fontSize: 40 }} />
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
