import { display } from "@mui/system";
import { useState, useEffect } from "react";
import "./App.css";
import { Articles } from "./Components/Articles";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import SearchForm from "./Components/SearchForm";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";

function App() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${term}&pageSize=${articlesPerPage}&page=${page}&from=2022-07-03&sortBy=popularity&apiKey=15398f05386b45b5ad447fc95ccdda02`
        );
        const data = await res.json();

        setArticles(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
    setIsLoading(false);
  }, [term]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/articles"
          element={
            <>
              <SearchForm
                searchText={(text) => {
                  setTerm(text);
                }}
              ></SearchForm>
              <Articles articles={articles} loading={isLoading} />
              <button
                onClick={() =>
                  setPage((page) => {
                    return page + 1;
                  })
                }
              >
                More Articles...
              </button>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
