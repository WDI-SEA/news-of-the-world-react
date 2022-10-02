import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from "./partials/Header"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
const axios = require("axios")

function App() {
  const [search, setSearch] = useState("")
  const [term, setTerm] = useState("")
  const [articles, setArticles] = useState("")

useEffect(() => {
  const url = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}` 
  async function searchNews() {
    try {
      const response = await axios.get(url)
      const articles = await response.data.articles
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

  // useEffect(() => {
  //   userSearch()
  // }, [])

  // const userSearch = async () => {
  //   try {
  //     const url = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}` 
  //     await axios.get(url)
  //       .then(response => {
  //         console.log(response.data)
  //       })
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }

 
 
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing searchTerm={search}  handleChange={handleChange} term={term} articles={articles}/>} />
          <Route path="/display" element={<Display searchTerm={search}  handleChange={handleChange} term={term} articles={articles}/>} />
          <Route path="/articles/:id" element={<Display searchTerm={search}  handleChange={handleChange} term={term} articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
