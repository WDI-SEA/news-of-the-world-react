import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Display from "./pages/Display"
import Landing from "./pages/Landing"

function App() {
  const [search, setSearch] = useState("")
  const [toApi, setApi] = useState("business")
  const [data, setData] = useState({ hits: [] })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    document.title = "Newts"
    fetch(
      `https://newsapi.org/v2/everything?q=${API_KEY}&from=2021-11-10&sortBy=publishedAt&apiKey=b7b980d172604ddc9fe16b536f28f23f`
    )
      .then((response) => response.json())
      .then((rdata) => {
        setData({ hits: rdata.articles })
      })
  }, [API_KEY])

  const handleSubmit = (e) => {
    e.preventDefault()
    setApi(search)
  }

  return (
    // Router for setting routes
    <BrowserRouter>
      <div className="app">
        <div className="headerContainer">
          <h1>News</h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                results={data.hits}
              />
            }
          />
          <Route
            path="/details/:id"
            element={<Display articles={data.hits} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App