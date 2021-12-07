// require('dotenv').config()
import { Routes, Route } from "react-router-dom"
import "../App.css"
import React, { useState, useEffect } from "react"
import Display from "./pages/Display"
import Landing from "./pages/Landing"

function App() {
  let [data, setData] = useState({ articles: [] })
  let [search, setSearch] = useState("")
  let [faves, setFaves] = useState([])

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=810f69c7510d43d992c3a39514284231`
    )
      .then((res) => res.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        console.log("this is rdata\n", rdata[2])
        setData({ articles: rdata[2] })
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredArticles = () => {
    let searchTerm = search.toLowerCase()
    return data.articles.filter((a) => {
      let lowerCaseArticle = a.title.toLowerCase()
      return lowerCaseArticle.includes(searchTerm)
    })
  }

  const handleClick = (article) => {
    if (faves.indexOf(article) === -1) setFaves([...faves, article])
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                articles={getFilteredArticles()}
                search={search}
                handleChange={handleChange}
                faves={faves}
              />
            }
          />
          <Route
            path="/display/:id"
            element={
              <Display articles={data.articles} handleClick={handleClick} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
