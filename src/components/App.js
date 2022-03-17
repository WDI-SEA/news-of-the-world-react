import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import '../App.css';

import Layout from './layout/Layout';
// import Display from './pages/Display';
import Landing from './pages/Landing';
import Details from './pages/Details';

function App() {
  const [articles, setArticles] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
  const api_key = process.env.REACT_APP_NEWS_API
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
  console.log('useEffect is firing')
  fetch(url)
    .then(res=>res.json())
    .then(jsonData => {
      console.log(jsonData.articles)
      setArticles(jsonData.articles)
    })
  },[])

  const searchNews = (e) => {
    e.preventDefault()
    const date = new Date()
    const api_key = process.env.REACT_APP_NEWS_API
    const url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2022-03-17&sortBy=popularity&apiKey=${api_key}`
    fetch(url)
      .then(res=>res.json())
      .then(jsonData => {
        console.log(jsonData.articles)
        setArticles(jsonData.articles)
      })
  }

  const addToFavorites = (article) => {
    if(!favorites.includes(article)) {
      setFavorites([...favorites, article])
    }
  }

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={<Landing articles={articles} favorites={favorites} addToFavorites={addToFavorites} searchInput={searchInput} setSearchInput={setSearchInput} searchNews={searchNews} />} 
            />
            {/* <Route path="/display" element={<Display />} /> */}
            <Route 
              path="/articles/:id" 
              element={<Details articles={articles} />} 
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
