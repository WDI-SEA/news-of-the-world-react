import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import {useState, useEffect} from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';
import axios from 'axios';
// import newsApp from '../newsAPI'

function App() {
  // console.log(newsApp)
  const [news, setNews] = useState([])
  const [faves, setFaves] = useState([])
  const [searchNews, setSearchNews] = useState("Bitcoin")




  const realnews = news.map((element, idx)=>{
      return (

     <li key={`article-id-${idx}`} textDecoration={'none'}><Link to={`/display/${idx}`}>{element.title}</Link></li> 

      )
  })

  useEffect(()=>{

  axios.get(`https://newsapi.org/v2/everything?q=${searchNews}&apiKey=153aac1440754aa6ba80953228c42ec7`)
  .then((response) =>{
    setNews(response.data.articles)
    console.log(news)
  })
  
  // console.log(news)
},[searchNews])


  
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing faves={faves}news={news} setSearchNews={setSearchNews} searchNews={searchNews} realnews={realnews}/>} />
          <Route path="/display/:id" element={<Display news={news} setFaves={setFaves} faves={faves} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
