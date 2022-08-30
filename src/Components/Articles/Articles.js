import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
  },
}));

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${term}&pageSize=${articlesPerPage}&from=2022-07-03&sortBy=popularity&apiKey=15398f05386b45b5ad447fc95ccdda02`
        );
        const data = await res.json();

        setArticles(data.articles);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
    setIsLoading(false);
  }, [term, articlesPerPage]);

  const classes = useStyles();
  return (
    <>
      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-4xl">Loading...</h1>
      ) : (
        <>
          <SearchForm
            searchText={(text) => {
              setTerm(text);
            }}
          ></SearchForm>
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
          <div className="grid place-items-center">
            <button
              onClick={() =>
                setArticlesPerPage((articlesPerPage) => {
                  return articlesPerPage + articlesPerPage;
                })
              }
              className="bg-green-400 py-4 px-10 my-3 rounded-lg text-white text-2xl"
            >
              More Articles...
            </button>
          </div>
        </>
      )}
    </>
  );
};
