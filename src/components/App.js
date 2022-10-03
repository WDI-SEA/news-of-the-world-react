import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from "./partials/Header"

import { useEffect, useState } from "react";
const axios = require("axios")

function App() {
  const [search, setSearch] = useState("")
  const [articles, setArticles] = useState("")
  const [faves, setFaves] = useState([])
 

useEffect(() => {
  const url = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}` 
  async function searchNews() {
    try {
      const response = await axios.get(url)
      const articles = await response.data.articles
      console.log(articles)
      setArticles(articles)
      
    } catch (err) {
      console.warn(err)
    }
  }
  searchNews()
}, [search])
  

  const handleChange = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
  }

  const handleClick = (article) => {
    let articleFaves = [...faves]
    const articleIndex = articleFaves.indexOf(article)

    if(articleIndex === -1) {
      console.log("adding article to favorites")
      articleFaves = [...articleFaves, article]
    }
    else if (articleIndex >= 0) {
      console.log("already a favorite article")
    }
    setFaves(articleFaves)
  }

 
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing searchTerm={search}  handleChange={handleChange} articles={articles} handleClick={handleClick} faves={faves} setSearch={setSearch} setArticles={setArticles} setFaves={setFaves}/>} />
          <Route path="/articles" element={<Display searchTerm={search}  handleChange={handleChange} articles={articles} handleClick={handleClick} faves={faves} setSearch={setSearch} setArticles={setArticles} setFaves={setFaves}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
