import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Favorite from './pages/Favorite'
import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header'
import KEY from '../API_Key'
import { useState, useEffect } from 'react';



function App() {
  let [news, setNews] = useState([])
  let [search, setSearch] = useState("")
  let [state, setState] = useState("")


  useEffect(() => {
    // fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${KEY.api_key}`)
    fetch(`https://newsapi.org/v2/everything?q=biden&apiKey=${KEY.api_key}`)
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        setNews([rdata[0], rdata[2]])
        console.log("Data:", rdata[2])
      })
      .catch(err => console.warn(err))
  }, [])


  const handleChange = (e) => {
    setState(e.target.value)
    console.log(state)
  }


  const handleClick = (e) => {

    setSearch(state)
    e.preventDefault()
    console.log(search)


  }


  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing search={search} state={state} handleChange={handleChange} handleClick={handleClick} news={news} />} />
          <Route path="/articles/:articleId" element={<Display />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
