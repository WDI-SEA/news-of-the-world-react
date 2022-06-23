import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react-router-dom";

import Display from "./pages/Display";
import Landing from "./pages/Landing";

function App() {
  const [fave, setFave] = useState([])
  const articleUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  useEffect(() => {
  
  const response = await axios.get(articleUrl)
  const articles = response.data.articles
  })

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles} />} />
          <Route path="/display" element={<Display articles={articles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
