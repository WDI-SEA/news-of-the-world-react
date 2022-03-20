import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Landing({ headlines }) {
  console.log("@LANDING");
  const articles = headlines.map((article) => {
    // console.log(article)
    return (
      <li key={article.url}>
        <h3>`{article.title}`</h3>
        <Link to={`/articles/${article.id}`}>show me more</Link>
        <img src={article.urlToImage} alt={""} />
        <p>date: `{article.publishedAt}`</p>
        <p>description: `{article.description}`</p>
        <a rel="noopener noreferrer" target="_blank" href={article.url}>
          link
        </a>
        <hr />
      </li>
    );
  });
  return (
    <div>
      <div>
        <h2>Top USA Headlines</h2>
      </div>
      <div>
        <ul>{articles}</ul>
        
      </div>
    </div>
  );
}

export default Landing;
