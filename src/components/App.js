import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from 'react'


import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("")
  const [faves, setFaves] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9fd41b67eeb0488bafebe35e3de422f3')
      .then(response => response.json())
      .then(rdata => {
        rdata = Object.values(rdata)
        setArticles(rdata[2])
      })
  }, [])

  // console.log('articles', articles)
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredArticles = () => {
    let searchTerm = search.toLowerCase()
    return articles.filter(a => {
      let lowerCaseTitle = a.title.toLowerCase()
      return lowerCaseTitle.includes(searchTerm)
    })
  }

  const handleClick = (el) => {
    if (faves.indexOf(el) === -1) {
      setFaves([...faves, el])
    }
    // console.log('fav', faves)
  }


  return (
    <div className="App">
      <div>
      <label htmlFor="article-search">Search Article: </label>
      <input
        type="text"
        id="article-search"
        value={search}
        onChange={handleChange}
      />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={getFilteredArticles()} handleClick={handleClick} faves={faves} />} />
          <Route path="/article/:id" element={<Display articles={articles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
