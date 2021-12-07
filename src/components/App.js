import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../App.css';



import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
const [news, setNews] = useState([])
const [search, setSearch] = useState("")
const [faves, setFaves] = useState([])


let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e28b234da31e41feaa251299e58a53c8"
if(search !== "") {
  apiURL = `https://newsapi.org/v2/everything?q=${search}&apiKey=e28b234da31e41feaa251299e58a53c8`
}

useEffect(()=>{
  fetch(apiURL)
  .then(response=>response.json())
  .then(rdata=>{
    setNews(rdata.articles)
  })
},[search])

const handleChange = (e) => {
  setSearch(e.target.value)
}

const addFave = (article) => {
  if(faves.indexOf(article) === -1){
  setFaves([...faves, article])
  }
}


  return (
    <div className="App">
      <br/>

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
          <Route path="/" element={<Landing news={news} faves={faves} search={search} clicky={addFave} />} />
          {/* <Route path="/" element={<Landing news={faves}  clicky={addFave} />} /> */}
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
