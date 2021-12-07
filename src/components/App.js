import { Routes, Route } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';
import Article from './pages/Article';

function App() {
  let [searchResults, setSearchResults] = useState([])
  let [searchTerm, setSearchTerm] = useState('bitcoin')
  let [faves, setFaves] = useState([])

  useEffect(()=>{
      fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=6935862978ef427e84ba0add779331d7`)
      .then(response => response.json())
      .then(rdata => {
          console.log('response data', rdata)
          setSearchResults(rdata.articles)
      })
  }, [searchTerm])

  
  // const handleChange = (e) => {
  //     setSearchTerm(e.target.value)
  // }
  const handleSubmit = (e) => {
      e.preventDefault()
      setSearchTerm(e.target[0].value)
      console.log(e)
  }
  
  const handleClick = (article) => {
      if (faves.indexOf(article)===-1) {
          setFaves([...faves, article])
        }
      }

  const allResults = searchResults.map((article, i) =>{
      return <li onClick={()=>handleClick(article)} key={i}>{article.title}</li>
  })

  const allFaves = faves.map((article, i) =>{
      return <li key={i}>{article.title}</li>   
  })



  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing allResults={allResults} allFaves={allFaves} handleSubmit={handleSubmit}/>} />
          <Route path="/display" element={<Display />} />
          {/* <Route path="/article" element={<Article myFave={myFave}/>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;