import React from "react";
import { useParams, Link } from "react-router-dom";


function Display({ topNewsList }) {
  const { id } = useParams();
  return (
    <>
      <h1>{topNewsList[id].title}</h1>
      {topNewsList[id].urlToImage === null ? (
        <h4>Image Unavailable</h4>
      ) : (
        <img src={topNewsList[id].urlToImage} width={500} height="auto" />
      )}
      {/* There is a limit on the characters on the content. How do you fix this? */}
      <p>{topNewsList[id].content}</p>
      {topNewsList[id].author === null || topNewsList[id].author === "" ? (
        <h4>No Author</h4>
      ) : (
        <h4>Written By: {topNewsList[id].author}</h4>
      )}
      <div>
        <p>
          Click here for{" "}
          <a href={topNewsList[id].url} target="_blank">
            more
          </a>{" "}
          information about the article
        </p>
      </div>
      <Link to={'/'}>Back to Main Page</Link>
    </>
  );
}

export default Display;
