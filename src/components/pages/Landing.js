import React from "react";
import { Link } from "react-router-dom";

function Landing(props) {
  const allArticles = props.articles.map((article, index) => {
    return (
      <div>
        <h1>
          <Link to={`/display/${index}`}>{article.title}</Link>
        </h1>
        <button onClick={() => props.handleSave(article)}>ADD 💾</button>
      </div>
    );
  });
  return <div>{allArticles}</div>;
}

export default Landing;

