import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Display from './pages/Display';
import Landing from './pages/Landing';
import SearchPage from './pages/SearchPage';

function App() {
  // state
  const [articles, setArticles] = useState([])
  // const [searchData, setSearchData] = useState('')

  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce55c74b200e4ac1925e7df8558f2d0d`

  useEffect(()=> {
    const getNews = async () => {
      // const news = await axios.get(process.env.REACT_APP_URL)
      const news = await axios.get(url)
      const articles = news.data.articles
      setArticles(articles)
    }
    getNews()
  }, [])

  return (
    <div className="App">
      <header>
          <Link to='/'>Home</Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Landing articles={articles} setArticles={setArticles} />} />
          <Route exact path="/articles/:id" element={<Display articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
