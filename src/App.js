import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Article from "./components/pages/Article";
import Articles from "./components/pages/Articles";
import { useParams } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'

function App() {
  const [article, setArticle] = useState([])
  let url =
    `https://newsapi.org/v2/everything?q=Apple&from=2022-03-20&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArticle(response.data.articles);
      })
      .catch(console.log);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact path="/"
            element={<Articles article={article}/>}
          />
          <Route 
            exact path="/articles/:id"
            element={<Article article={article}/>}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
