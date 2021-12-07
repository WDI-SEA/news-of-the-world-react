import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Article from './pages/Article';

function App() {
  let [searchResults,setSearchResults] = useState([])
  let [searchTerm,setSearchTerm] = useState('bitcoin')
  let [faves,setFaves] = useState([])

  const today = (new Date()).toJSON().substring(0,10)
  console.log('today:', today)

  useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&from=${today}&apiKey=99ae9a369d9d472c944160bb8f87cbee`)
      .then(response => response.json())
      .then(rdata => {
          console.log('response data', rdata)
          setSearchResults(rdata.articles)
      })
  }, [searchTerm])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(e.target[0].value)
  }

  const handleFave = (article) => {
      if (faves.indexOf(article) === -1) {
          setFaves([...faves, article])
      }
  }

  const allResults = searchResults.map( (article, i) => {
      return <li key={i}><Link to={`/article/${i}`}><h3>{article.title}</h3></Link><div><button onClick={() => handleFave(article)}>Add to Faves</button></div></li>
  })

  const allFaves = faves.map( (article, i) => {
      return <li key={i}><h3>{article.title}</h3></li>
  })


  return (
    <div className="App">
      <main>
        <h1>A news site in 2002</h1>
        <Routes>
          <Route path="/" element={<Landing allResults={allResults} searchTerm={searchTerm} allFaves={allFaves} handleSubmit={handleSubmit} />} />
          <Route path="/article/:id" element={<Article allResults={searchResults} />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
