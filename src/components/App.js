import { Routes, Route } from "react-router-dom"
import "../App.css"
import React, { useState, useEffect } from "react"
import Display from "./pages/Display"
import Landing from "./pages/Landing"

function App() {
  let [data, setData] = useState({ articles: [] })
  let [search, setSearch] = useState("")

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=704b0327c1de487c804f47936b4e1d4d`)
      .then((response) => response.json())
      .then((responseData) => {
        responseData = Object.values(responseData)
        console.log("this is responsedata", responseData[2])
        setData({ articles: responseData[2] })
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
              />
            }
          />
          <Route
            path="/display/:id"
            element={
              <Display articles={data.articles} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App