import { Routes, Route, Navigate } from "react-router-dom"
import "../App.css"

import TopStories from "./pages/TopStories"
import Search from "./pages/Search"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/top" />} />
          <Route path="/top" element={<TopStories />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
