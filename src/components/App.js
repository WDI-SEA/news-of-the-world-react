import { Routes, Route } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from "react";
import Display from './pages/Display';
import Landing from './pages/Landing';




function App() {
  let[data, setData] = useState([])
  let[search, setSearch] = useState('')
  let[faves, setFaves] = useState ([])

  let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a6cc729078714e6992b6effcda0e415b"
  if(search !== "") {
  apiURL = `https://newsapi.org/v2/everything?q=${search}&apiKey=a6cc729078714e6992b6effcda0e415b`
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
  e.preventDefault()
  setSearch(e.target.value)
}

const getFilteredArticles = () => {
  return data.filter((a) => {
    return a.title.toLowerCase().includes(search.toLowerCase())
  })
}

const handleClick = (article) => {
  if (faves.indexOf(article)===-1){
    setFaves([...faves, article])
    console.log('added', faves)
  }
}

let articleFavorites = faves
console.log ('these', articleFavorites)

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
        <Route path="/"
        element={<Landing 
          articles={data}
          handleClick={handleClick}
          faves={articleFavorites}/>}
          value={faves} />
        <Route path="/:id" element={<Landing articles={getFilteredArticles()} />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </main>
</div>
);
}

export default App;





