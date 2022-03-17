import React from "react";
import { useState } from 'react'

function Landing({topHeadlines}) {
    console.log("@LANDING")
    console.log(topHeadlines)
  const articles = topHeadlines.map((article) => {
    return (
      <li>
        <h3>`{article.title}`</h3>
        <img 
            src={article.urlToImage}
            alt={''}
        />
        <p>date: `{article.publishedAt}`</p>
        <p>description: `{article.description}`</p>
        <a rel='noopener noreferrer' target='_blank' href={article.url}>link</a>
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
