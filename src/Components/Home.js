import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  topContent: {
    fontSize: "60px",
    color: "white",
    fontWeight: "bold",
  },
  middleContent: {
    marginTop: "20px",
    color: "white",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "underline",
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div className="showcase">
      <div className="overlay px-5">
        <Typography variant="h2" className={classes.topContent}>
          BeNews
        </Typography>
        <Typography
          variant="h6"
          className={classes.middleContent}
          align="center"
        >
          Read About Anything All Around The World From Aggregated Articles !
          <Typography variant="subtitle1">
            <Link to="/articles" className={classes.link}>
              Click Here
            </Link>
            To Search For Articles.
          </Typography>
        </Typography>
      </div>
    </div>
  );
};
