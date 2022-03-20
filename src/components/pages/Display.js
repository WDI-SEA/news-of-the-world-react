import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Display({ articles }) {
  const { idx } = useParams();

  const article = articles[idx];
  console.log(article);

  const addSave = (article) => {
    const savedArticles = JSON.parse(sessionStorage.getItem("saved") || "[]");
    savedArticles.push(article);
    sessionStorage.setItem("saved", JSON.stringify(savedArticles));
    alert("added");
  };
  return (
    <div class="article-div">
      <h1 class="head">{article.title}</h1>
      <img class="img" src={article.urlToImage} />
      <h3 class="content">{article.content}</h3>
      <div>
        <a class="link" href={article.url}>
          Read the full article here
        </a>
      </div>
      <div>
        <button class="button" onClick={() => addSave(article)}>
          Save to read later
        </button>
      </div>
      <Link class="link" to={`/`}>
        Home
      </Link>
    </div>
  );
}
