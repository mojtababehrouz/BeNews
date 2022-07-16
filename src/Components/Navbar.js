import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BlockRounded, CallMissedSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),

    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <CssBaseline />
      <Toolbar className="bg-green-400">
        <Typography variant="h3" className={classes.logo}>
          BeNews
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>

          <Link to="/articles" className={classes.link}>
            Articles
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
