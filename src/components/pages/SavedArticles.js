import React from "react";
import { Link } from "react-router-dom";

function SavedArticles(props) {
  const allSaved = props.articles.map((article, index) => {
    return (
      <div>
        <h1>
          <Link to={`/savedarticles/${index}`}>{article.title}</Link>
        </h1>
        <button index={index} onClick={() => props.handleRemove(index)}>
          {" "}
          REMOVE{" "}
        </button>
      </div>
    );
  });
  return <div> {allSaved} </div>;
}

export default SavedArticles;
