import { Routes, Route } from 'react-router-dom';
import '../App.css';
import axios from 'axios'


import Display from './pages/Display';
import Landing from './pages/Landing';
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import Header from './pages/partials/Header';
import { useState, useEffect } from 'react';

function App() {
  const [headlines, setHeadlines] = useState([])

  // axios
  useEffect(()=> {
    
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        const response = await axios.get(url)
        console.log(response)
        setHeadlines(response.data.articles)
      }catch(err){
        console.warn('API ERROR', err)
      }
    }
    fetchData()
  },[]) //make sure this useEffect only runs the first time
  const [current, setCurrent] = useState({})
  function handleHeadlineClick(e){
    console.log('what is in it', e)
    setCurrent(e)
  }
  const [keyword, setKeyword] = useState('')
  function handleChange(e){
    console.log(e.target.value)
    setKeyword(e.target.value)
  }
  const [result, setResult] = useState([])
  function handleSubmit (e) {
    e.preventDefault()
      const fetchSearch = async() =>{
          try{
            const url= `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
            const response = await axios.get(url)
            console.log(response)
            setResult(response.data.articles)
          }catch(err){
            console.warn('error',err)
          }
      }
      fetchSearch()
  }
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing 
          headlines = {headlines}
          handleHeadlineClick = {handleHeadlineClick}
          />} />
          <Route path="/display" element={<Display 
          headlines = {current}
          />} />
          <Route path="/search" element={<Search 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleHeadlineClick={handleHeadlineClick}
          result={result}
          />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
