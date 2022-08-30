import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    fontWeight: "bold",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className="bg-green-400">
        {isMobile ? <DrawerComponent /> : null}
        <Typography variant="h5" className={classes.logo}>
          BeNews
        </Typography>
        {isMobile ? null : (
          <div className={classes.navlinks}>
            <Typography variant="h6">
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/articles" className={classes.link}>
                Articles
              </Link>
            </Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
