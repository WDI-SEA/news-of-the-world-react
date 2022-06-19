import { Routes, Route } from "react-router-dom"
import "../App.css"

import TopStories from "./pages/TopStories"
import Landing from "./pages/Landing"
import Search from "./pages/Search"

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/top" element={<TopStories />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
