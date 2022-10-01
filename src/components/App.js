import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';

// prevents react-router-dom "reload coupled with fetch()" error up till articleId of 19
const articleArray = [
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."},
  {title: "loading articles..."}
]

function App() {
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
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles} />} />
          <Route path="/articles/:articleId" element={<Display articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
