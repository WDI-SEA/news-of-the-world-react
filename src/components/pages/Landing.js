import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing({ articles }) {
  const [input, setInput] = useState("");
  const titles = articles
    .filter((article) =>
      article.title.toLowerCase().includes(input.toLowerCase())
    )
    .map((article, idx) => {
      return (
        <div key={`article-link${idx}`}>
          <Link to={`/display/${idx}`} class="headlines">
            {article.title}
          </Link>
        </div>
      );
    });

  return (
    <>
      <h1 class="head">THE WORLD IS CERTAINLY COMING TO AN END</h1>
      <h2 class="subhead">HERE ARE THE HEADLINES IN THE U.S. TODAY</h2>
      <form>
        <label htmlFor="Search">Search:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <Link class="link" to={`/saved`}>
        Saved Articles
      </Link>

      <ul>{titles}</ul>
    </>
  );
}
