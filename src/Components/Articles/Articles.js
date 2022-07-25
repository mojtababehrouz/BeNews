import React from "react";

export const Articles = ({ loading, articles }) => {
  return (
    <>
      {loading ? (
        <h1 className="text-center mt-20 font-bold text-4xl">Loading...</h1>
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 pt-10 pb-20 ">
          {articles.map((articles) => {
            const { author, content, publishedAt, title, url, urlToImage } =
              articles;

            return (
              <article
                key={Math.random()}
                className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"
              >
                <img src={urlToImage} alt="" className="rounded-lg pb-10" />
                <h2 className="font-bold text-3xl mb-5 lg:text-4xl">{title}</h2>
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
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};
