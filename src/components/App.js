import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  // NEED TO FITURE OUT WHY API KEY IS NOT WORKING
  const api_key = process.env.REACT_APP_NEWS_API_KEY
  // console.log(api_key)

  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0ac83d01d6ed41b5a446e7c31637342a` // NEED TO UPDATE WITH HIDDEN API KEY


  const handleSearch = (e) => {
    const searchTerm = e.target.value
    console.log(e.target.value)
    const encodedSearchTerm = encodeURIComponent(searchTerm)
    setSearch(encodedSearchTerm)



  }

  useEffect(() => {
      fetch(newsUrl)
      .then(response => response.json())
      .then(jResponse => {
          // console.log(jResponse.articles)
          setArticles(jResponse.articles)
      })
  }, [])

  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
          path="/" 
          element={<Landing 
                      articles={articles}
                      handleSearch={handleSearch}
                      value={search}
                    />} />
          <Route path="/articles/:id" element={<Display articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
