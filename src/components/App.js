import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [apiSearch, setApiSearch] = useState('')
  const [saved, setSaved] = useState([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    (async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${apiSearch}&page=${page}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        const response = await axios.get(url)
        setArticles(response.data.articles)
        console.log(url)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [apiSearch, page])

const handleSearchSubmit = (e) => {
  e.preventDefault()
  // console.log(e.target.search.value)
  setApiSearch(e.target.search.value)
  
}

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handlePageIncrement = () => {
    setPage(page + 1)
  }
  const handlePageDecrement = () => {
    setPage(page - 1)
  }

  const handleSaveArticle = (article) => {
    console.log(article)
    setSaved([...saved,article])
  }
  
  return (
      <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles} 
          saved={saved}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
          handlePageIncrement={handlePageIncrement}
          handlePageDecrement={handlePageDecrement} 
          search={search}/>} />
          <Route path="/articles/:id" element={<Display 
          articles={articles}
          handleSaveArticle={handleSaveArticle} 
          />} />
          <Route path="/articles/saved/:id" element={<Display 
          articles={saved}
          handleSaveArticle={handleSaveArticle} 
          />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
