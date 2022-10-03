import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'
import Favorite from './pages/Favorite'
import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header'
import KEY from '../API_Key'




function App() {
  let [news, setNews] = useState([])
  let [search, setSearch] = useState("biden")
  let [state, setState] = useState("")
  let [faves, setFaves] = useState([])

  const handleChange = (e) => {
    setState(e.target.value)
  }

      
  const handleClick = (e) => {
    setSearch(e)
  }

  const handleRequest = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${KEY.api_key}`)
      setNews(response.data.articles)
    } catch(err) {
      console.warn(err)
    }
  }

  

  useEffect (() => {
    handleRequest()
    
  }, [search])

  const handleFaves = e => {
    if(!faves.includes(e.target.value)){
      setFaves([...faves, e.target.value])
    }
    e.stopPropagation()
  }
  const handleRemove = e => {
    let newFaves = [...faves]
    newFaves.splice(e.target.value, 1)
    setFaves(newFaves)
  }

  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing search={search} state={state} handleChange={handleChange} handleClick={handleClick} news={news} />} />
          <Route path="/articles/:articleId" element={<Display news={news} handleFaves={handleFaves}/>} />
          <Route path="/favorites" element={<Favorite news={news} faves={faves} handleRemove={handleRemove}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
