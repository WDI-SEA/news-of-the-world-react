import { Routes, Route } from "react-router-dom"
import "../App.css"
import { useEffect, useState } from "react"


import Display from "./pages/Display"
import Landing from "./pages/Landing"

function App() {
  let [data, setData] = useState({ articles: [] })
  let [search, setSearch] = useState('')
  let [favorites, setFavorites] = useState([])
  let [selectedId, setSelectedId] = useState('')

  // useEffect(() => {
  //   fetch(
  //     `https://newsapi.org/v2/everything?q=bitcoin&apiKey=b34c95e8c36740739608e2868d1fa462`
  //   )
  //     .then((response) => response.json())
  //     .then((rdata) => {
  //       setData({ articles: rdata.articles }) 
  //     })
  // }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const searchClick = () => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=b34c95e8c36740739608e2868d1fa462`)
      .then(response => response.json())
      .then(rdata => {
        setData({ articles: rdata.articles })
      })
    console.log(search)
  }

  const addFavorite = article => {
    setFavorites([article, ...favorites])
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={
            <Landing
              articles={data.articles}
              handleChange={handleChange}
              searchClick={searchClick}
              addFavorite={addFavorite}
              favorites={favorites}
              search={search}
            />
          }/>
          <Route path="/article/:id" element={<Display articles={data.articles}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
