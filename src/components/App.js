import { Routes, Route, useParams } from 'react-router-dom';
import '../App.css';
import React, {useEffect, useState} from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';
// require('dotenv').config()

function App() {
  // initialize State
  const [articles, setArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState({})
  const [search, setSearch] = useState('')
  const [faves, setFaves] = useState([])

  // useEffect(()=>{
  //   // console.log(process.env.APIKEY)
  //   fetch(`https://newsapi.org/v2/everything?q=english&from=2021-12-06&sortBy=publishedAt&language=en&apiKey=dc00ed2f16da4200b07aff06b17bbf15`)
  //   .then(data => data.json())
  //   .then(rdata => {
  //     console.log(rdata.articles)
  //     setArticles(rdata.articles)
    
  //   } )
  // },[] )

  // helper methods

  const handleClick = (a) => {
    console.log(a.title, ' clicked')
    setCurrentArticle(a)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const addFave = (article) => {
    console.log('targetID: ', articles.indexOf(article))
    if (faves.indexOf(article) === -1) {
      setFaves([...faves, article])
    }
  }
  const searchNews = (e) => {
    e.preventDefault()
    console.log('searching with this target', search)
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-12-06&sortBy=publishedAt&language=en&apiKey=dc00ed2f16da4200b07aff06b17bbf15`)
    .then(data => data.json())
    .then(rdata => {
      console.log(rdata.articles)
      setArticles(rdata.articles)
    })
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles} handleClick={handleClick} handleChange={handleChange} searchNews={searchNews} search={search} faves={faves} addFave={addFave}/>} />
          <Route path="/article/:id" element={<Display currentArticle={currentArticle} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
