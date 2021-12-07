import { Routes, Route } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Display from "./pages/Display";
import Landing from "./pages/Landing";

function App() {
  let [searchResults, setsearchResults] = useState([]);
  let [searchTerm, setsearchTerm] = useState("bitcoin");
  const [faves, setFaves] = useState([]);

  useEffect(() => {
    // fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`)
    fetch(
      `https:newsapi.org/v2/everything?q=${searchTerm}&apiKey=b15b0eba582e41c7bc6842087fd2ca5e`
    )
      .then((response) => response.json())
      .then((rdata) => {
        console.log("response data", rdata);
        setsearchResults(rdata.articles);
      });
  }, [searchTerm]);

  // const handleChange = (e) => {
  //     setsearchTerm(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearchTerm(e.target.value);
    console.log(e);
  };

  const handleClick = (faveArticle) => {
    if (faves.indexOf(faveArticle) === -1) {
      setFaves([...faves, faveArticle]);
    }
  };

  console.log("this is my", searchTerm)

  const allResults = searchResults.map((article) => {
    return (
      <li onClick={() => handleClick(article)} >
        <p>{article.title}</p>
      </li>
    );
  });
  const allFaves = faves.map((article, i) => {
    return (
      <li key={i}>
        <p>{article.title}</p>
      </li>
    );
  });

  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                allResults={allResults}
                allFaves={allFaves}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/display/:id" element={<Display articles={setsearchResults}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
