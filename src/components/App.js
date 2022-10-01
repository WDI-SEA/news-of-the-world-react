import { Routes, Route, useNavigate } from 'react-router-dom';
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

  const handleClick = (e) => {
    
    console.log(search)
  }

  const navigate = useNavigate()

  const onClick = e => {
    setSearch(e.target.value)
    navigate(`?search=${search}`)
    e.preventDefault()
    console.log(search)
  }


  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${KEY.api_key}`)
  //     .then(response => response.json())
  //     .then((data) => {
  //       data = Object.values(data)
  //       setNews([data])
  //       console.log("Data:", data)
  //     })
  //     .catch(err => console.warn(err))
  // }, [])


  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing search={search} onClick={onClick} />} />
          <Route path="/articles/:articleId" element={<Display />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
