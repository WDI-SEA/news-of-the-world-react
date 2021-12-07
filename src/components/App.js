import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  let[data, setData] = useState([])
  let[search, setSearch] = useState('')
  let[fave, setFave] = useState([])

  let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=aee6bc851ac44b92b594aedb51d93684"
  if(search !== "") {
    apiURL = `https://newsapi.org/v2/everything?q=${search}&apiKey=aee6bc851ac44b92b594aedb51d93684`
  }

  useEffect(() => {
    fetch(apiURL)
    .then(response => response.json())
    .then(rdata => {
      console.log(rdata.articles)
      setData(rdata.articles)
    })
  }, [search])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredArticles = () => {
    return data.filter((a) => {
      return a.title.toLowerCase().includes(search.toLowerCase())
    })
  }

  const addToFaves = (favorite) => {
    // if(fave.indexOf(favorite) === -1) {
      setFave([
        ...fave, 
        favorite
      ])
    // }
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="article-search">Search: </label>
        <input 
          type="text"
          id="article-search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={data} fave={fave}/>} />
          <Route path="/:id" element={<Landing articles={getFilteredArticles()} />} />
          <Route path="/display/:id" element={<Display data={data} addToFaves={addToFaves}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
