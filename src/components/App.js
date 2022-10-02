import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./partials/Header";
import Display from './pages/Display';
import Landing from './pages/Landing';

// prevents react-router-dom "reload coupled with fetch()" error up till articleId of 19
const articleArray = [
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."},
  {title: "loading article..."}
]

function App() {
  const [input, setInput] = useState("");
  const [articles, setArticles] = useState(articleArray);
  const [savedArticles, setSavedArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = async () => {
    try {
      // gets recent 20 popular articles from the US
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
      const articleData = await response.json();
      setArticles(articleData.articles);
    }
    catch (error) {
      console.warn(error);
    }
  }
  const getSearchResults = async value => {
    try {
      setInput(value)
      // search results of all languages sorted by popularity
      const response = await fetch(`https://newsapi.org/v2/everything?q=${value}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
      const articleData = await response.json();
      setArticles(articleData.articles);
    }
    catch (error) {
      console.warn(error);
    }
  }
  const handleFilterClick = filter => {
    switch(filter) {
      case "all":
        input ? getSearchResults(input) : getArticles();
        break;
      case "saved":
        setArticles(savedArticles);
        break;
      default:
        console.log("No matching filter category");
        break;
    }
  }
  const handleSaveClick = article => {
    setSavedArticles([...savedArticles, article]);
  }
  return (
    <div className="mt-3 mb-5">
      <main>
        <Header />
        <Routes>
          <Route path="/" 
            element={
              <Landing 
                articles={articles} 
                input={input} 
                getSearchResults={getSearchResults} 
                handleFilterClick={handleFilterClick}
              />
            } 
          />
          <Route path="/articles/:articleId" 
            element={
              <Display 
                articles={articles}
                handleSaveClick={handleSaveClick}
              />
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
