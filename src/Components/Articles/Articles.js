import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
  },
}));

export const Articles = ({ loading, articles,topArticles }) => {
  const classes = useStyles();
  return (
    <>
      {loading ? (
        <h1 className="text-center mt-20 font-bold text-4xl">Loading...</h1>
      ) : (
        <Grid container>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 pt-10 pb-20 ">
            {articles.map((articles) => {
              const { author, content, publishedAt, title, url, urlToImage } =
                articles;
              return (
                <Card key={Math.random()}>
                  <CardMedia
                    component="img"
                    image={urlToImage}
                    alt=""
                    height="140"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.title}
                    >
                      {title}
                    </Typography>
                    <p>{content}</p>
                    <ul className="my-4">
                      <li>
                        <span className="font-bold">Author: </span>
                        {author}
                      </li>
                      <li>
                        <span className="font-bold">Published at: </span>
                        {publishedAt}
                      </li>
                    </ul>
                    <a
                      href={url}
                      rel="noreferrer"
                      target="_blank"
                      className="underline"
                    >
                      Web Ressource
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </section>
        </Grid>
      )}
    </>
  );
};
