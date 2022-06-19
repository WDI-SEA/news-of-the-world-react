import { Routes, Route } from "react-router-dom"
import "../App.css"

import TopStories from "./pages/TopStories"
import Landing from "./pages/Landing"

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/top" element={<TopStories />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
