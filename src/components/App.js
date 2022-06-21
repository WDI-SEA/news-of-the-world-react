import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

const [search, setSearch] = useState('')
const [apiq, setApi] = useState('business')
const [data, setData] = useState({hits: []})

const handleChange = (e) => {
  setSearch(e.target.value)
}



useEffect(() => {
  fetch(`https://newsapi.org/v2/everything?q=${apiq}&from=2021-11-10&sortBy=publishedAt&apiKey=94c1244abef44c6b86d9af3a232214d7`)
  .then(response => response.json())
  .then(data =>
    setData({hits: data.articles}))
})

const handleSubmit = (e) => {
  e.preventDefault()
  setApi(search)
}
  return (
    <div className="App">
      <main>
        <h1>News</h1>
        <Routes>
          <Route path="/" element={<Landing handleChange={handleChange} handleSublit={handleSubmit} results={data.hits}/>} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
