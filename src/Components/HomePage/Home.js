import { Typography, makeStyles, Container, Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TopArticles } from "./TopArticles";

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
  subject: {
    textDecoration: "underline",
    fontWeight: "bold",
    marginTop: "30px",
  },
}));

export const Home = () => {
  const [topArticles, setTopArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=Iran&from=2022-08-20&pageSize=20&sortBy=popularity&apiKey=15398f05386b45b5ad447fc95ccdda02`
        );
        const data = await res.json();

        setTopArticles(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  const classes = useStyles();
  return (
    <>
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
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.subject} gutterBottom>
          Top News From Iran
        </Typography>
        <Grid container>
          <Grid>
            <TopArticles topArticles={topArticles} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
