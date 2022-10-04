import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './Header';

function App() {

  const [news, setNews] = useState([])
  // controlled input
  const [inputValue, setInputValue] = useState('')
  // // what to search on the api
  const [search, setSearch] = useState('programming')

  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
  
  console.log(url)
    useEffect(() => {
            const fetchNews = async () => {
                try{
                    const response = await fetch(url)
                    const news = await response.json()
                    setNews(news.articles)
                    console.log('RESPONSE DATA', news)
                // console.log('RESPONSE DATA', newsData)    
                } catch(err) {
                    console.log(err)
                }
            }
             fetchNews() 
        }, [search] )


  return (
    <div className="App">
        <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <Landing
              news={news}
              inputValue={inputValue}
              setInputValue={setInputValue}
              setSearch={setSearch}
            />} />
          <Route path="/display/:id" element={<Display news={news} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
