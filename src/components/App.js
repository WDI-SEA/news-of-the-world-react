import { Routes, Route } from 'react-router-dom';
import '../App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Display from './pages/Display';
import Landing from './pages/Landing';




function App() {
  const [topNewsList, setTopNewsList] = useState([])
  const [faves, setFaves] = useState([])
  
  const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`


  // RECEIVING API DATA
  useEffect(() => {
    axios.get(topNewsUrl)
      .then(response => {
        // console.log("This is the top news API",response.data.articles)
        setTopNewsList(response.data.articles)
      })
    }, [topNewsList])

  // MAP THROUGH THE ARTICLES
  const newsList = topNewsList.map((news, i) => {
    return (
      <div key={i} style={{
        border: '2px solid black',
        padding: "20px",
        margin: "10px"
      }}>
        {news.urlToImage === null ? <h4>Image Unavailable</h4> : <img src={news.urlToImage} width={500} height='auto'/>}
        <h2>{news.title}</h2>
        <div>
          <h5>{news.description}</h5>
        </div>
          {news.author === null || news.author === "" ? <h4>No Author</h4> : <p>Written By: {news.author}</p>}
        <div>
          <p>Click here for <a href={news.url} target="_blank">more</a> information about the article</p>
        </div>
        {/* <button onClick={() => setFaves([...faves, ])}>
          Favorite this Article
        </button> */}
      </div>
        

    )
  })
    
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing newsList={newsList} setFaves={setFaves}faves={faves}/>} />
          <Route path="/display" element={<Display  faves={faves}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
