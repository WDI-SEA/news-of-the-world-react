import { Link } from "react-router-dom";
import { useState } from "react";

function Articles({ article }) {
  const [search, setSearch] = useState("");
  let [fav, setFav] = useState([])
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredArticles = (e) => {
    let searchTerm = search.toLowerCase();
    return article.filter((a) => {
      let lowerCaseName = a.title["name-USen"].toLowerCase();
      return lowerCaseName.includes(searchTerm);
    });
  };
  const handleClick = (villager) => {
    if (!fav.includes(villager)) {
      setFav([...fav, villager]);
    }
  };

  const listArticle = article.map((art, idx) => {
    return (
      <div key={`Article-${idx}`}>
        <Link to={`/articles/${idx}`}>
          <h1>{art.title}</h1>
        </Link>

        <p>Author:{art.author}</p>
        <img src={art.urlToImage} />
        <hr />
      </div>
    );
  });
  // console.log(article)
  
  return (
    <div>
      <h1>All Articles</h1>
      <label htmlFor="villager-search">Search for an article:</label>
      <div>
        <input
          id="article-search"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
      {listArticle}
    </div>
  );
}

export default Articles;
