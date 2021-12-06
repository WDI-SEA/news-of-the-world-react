import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
  console.log(props);
  const articleList = props.articles.map((a, i) => {
    return (
      <li key={i}>
        <h3 onClick={() => props.handleClick(a)}>
          <Link to={`/display/${i}`}>{a.title} </Link>
        </h3>
        <p>Written by: {a.author}</p>
        <img src={a.urlToImage} alt='' />
      </li>
    );
  });

  const favesList = props.articles.map((f, i) => {
    return (
      <li key={i}>
        <h3 onClick={() => props.handleClick(f)}>
          <Link to={`/display/${i}`}>{f.title} </Link>
        </h3>
      </li>
    );
  });

  return (
    <div>
      <h1>Landing Page</h1>

      <div>
        <labels htmlFor='article-search'>Search</labels>
        <input type='text' id='article-search' value={props.search} onChange={props.handleChange} />
      </div>
      <ul>{articleList}</ul>
      <div>
        <h1>Faves List</h1>
        <ul>{favesList}</ul>
      </div>
    </div>
  );
}

export default Landing;
