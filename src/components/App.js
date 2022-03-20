import "../App.css";
import Display from "./pages/Display";
import Landing from "./pages/Landing";
import Saved from "./pages/Saved";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setArticles(response.data.articles);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route exact path="/" element={<Landing articles={articles} />} />
          <Route
            path="/display/:idx"
            element={<Display articles={articles} />}
          />
          <Route path="/saved" element={<Saved articles={articles} />} />
        </Routes>
      </main>
    </div>
  );
}
