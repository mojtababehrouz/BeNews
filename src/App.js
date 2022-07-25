import { useState, useEffect } from "react";
import "./App.css";
import { Articles } from "./Components/Articles/Articles";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./Components/Articles/SearchForm";
import { Home } from "./Components/Home";

function App() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("everything");
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
        console.log(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
    setIsLoading(false);
  }, [term, articlesPerPage]);

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
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
