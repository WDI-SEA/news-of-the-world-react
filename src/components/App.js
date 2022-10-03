import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {

const [data, setData] = useState({articles: []})
const [search, setSearch] = useState('')

useEffect(() => {
  fetch(`https://newsapi.org/v2/everything?q=${value}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  .then(response => response.json())
  .then((rdata) => {
    rdata = Object.values(rdata)
    setData({articles: rdata})
    console.log('articles', rdata)
  })
}, [])

const articlesList = data.articles.map((article, i) => {
  return <li>{article.name['Gismodo.jp']}</li>
})

const handleChange = e => {
  setSearch(e.target.value)
}

const getFilteredArticles = e => {
  let searchTerm = search.toLowerCase()
  return data.articles.filter(news => {
    let lowerCaseName = news.name['Gismodo.jp'].toLowerCase()
    return lowerCaseName.includes(searchTerm)
  })
}
  

  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Landing />}
            setSearch={setSearch}
            handleChange={handleChange}
           />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
