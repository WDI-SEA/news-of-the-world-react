import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import SearchResults from "./SearchResults";
import Favorites from "./Favorites";
const axios = require("axios");

function Landing() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showSearch, setShowSearch] = useState(true);
  const [showFaves, setShowFaves] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (search === "") {
      e.preventDefault();
      console.log("error, no search term");
    } else {
      e.preventDefault();
      const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-03-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      const searchResults = await axios.get(url);
      setResults(searchResults.data.articles);
    }
  };
  const handleShowSearch = (e) => {
    setShowSearch(!showSearch);
    if (showSearch) {
      e.target.value = "Hide";
    } else {
      e.target.value = "Show";
    }
  };
  const handleShowFaves = (e) => {
    setShowFaves(!showFaves);
    e.target.value = showFaves;
    if (showFaves) {
      e.target.value = "Hide";
    } else {
      e.target.value = "Show";
    }
  };

  const handleClick = (article) => {
    if (favorites.includes(article)) {
      let newFavesArr = favorites.slice();
      let deleteIndex = favorites.indexOf(article);
      newFavesArr.splice(deleteIndex, 1);
      setFavorites(newFavesArr);
    } else {
      console.log("fave added");
      let newFavesArr = favorites.slice();
      newFavesArr.push(article);
      setFavorites(newFavesArr);
    }
  };
  //   useEffect(() => {
  //     console.log("the search results are updated");
  //   }, [results]);
  return (
    <div>
      <h1>NEWS OF THE WORLD</h1>
      <h3>SEARCH FOR NEWS, OKAY?</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Enter Search Term</label>
        <input id="search" name="search" type="text" onChange={handleChange} />
        <button>Submit</button>
      </form>
      <h3>
        Results from Search
        <button type="button" onClick={handleShowSearch}>
          {showSearch ? "Show" : "Hide"}
        </button>
      </h3>
      {showSearch ? (
        <SearchResults
          results={results}
          handleClick={handleClick}
          favorites={favorites}
        />
      ) : null}
      <h3>
        Favorites{" "}
        <button type="button" onClick={handleShowFaves}>
          {showFaves ? "Show" : "Hide"}
        </button>
      </h3>
      {showFaves ? (
        <Favorites favorites={favorites} handleClick={handleClick} />
      ) : null}
    </div>
  );
}

export default Landing;
