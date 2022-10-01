import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
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
  useEffect(() => {
    const getArticles = async () => {
        try {
          // gets recent 20 popular articles
          const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
          const articleData = await response.json();
          setArticles(articleData.articles);
        }
        catch (error) {
          console.warn(error);
        }
    }
    getArticles();
  }, []);
  const getSearchResults = async e => {
    try {
      setInput(e.target.value)
      // search results of all languages sorted by popularity
      const response = await fetch(`https://newsapi.org/v2/everything?q=${e.target.value}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
      const articleData = await response.json();
      setArticles(articleData.articles);
    }
    catch (error) {
      console.warn(error);
    }
  }
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" 
            element={<Landing articles={articles} input={input} getSearchResults={getSearchResults} />} 
          />
          <Route path="/articles/:articleId" element={<Display articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
