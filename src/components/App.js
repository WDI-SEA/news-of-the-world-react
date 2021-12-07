import { Routes, Route, NavLink } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';
require('dotenv').config()

function App() {
  let [data, setData] = useState([])
  let [selectedStory, setSelectedStory] = useState({})
  let [search, setSearch] = useState('')
  let [faves, setFaves] = useState([])

  useEffect(() => {
    // fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}`)
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=8870f7753c8e4bf4b3a489f0f413852b`)
    .then(res => res.json())
    .then(rData => {
      // console.log(rData)
      setData(rData.articles)
    })
  }, [search])

  const handleClick = (story) => {
    // console.log(story)
    setSelectedStory(story)
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const addToFaves = story => {
    // Somehow it's going here from handleClick
    console.log(story)
    if(faves.indexOf(story)===-1) {
      setFaves([...faves, story])
    }
  }

  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <input type='text' onChange={handleChange} value={search}/>
      </nav>
      <div id='faves'>
        <h1>Favorites:</h1>
        <Landing stories={faves} storyClick={handleClick} />
      </div>
      <hr/>
      <main>
        <Routes>
          <Route path="/" element={<Landing stories={data} storyClick={handleClick} />} />
          <Route path="/article/:id" element={<Display addToFaves={addToFaves} story={selectedStory}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
