// require('dotenv').config()
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react';
import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  const [data, setData] = useState({ articles: [] });
  const [search, setSearch] = useState('');
  let [faves, setFaves] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=810f69c7510d43d992c3a39514284231`)
      .then((res) => res.json())
      .then((rdata) => {
        rdata = Object.values(rdata);
        setData({ articles: rdata[2] });
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredArticles = () => {
    let searchTerm = search.toLowerCase();
    return data.articles.filter((a) => {
      let lowerCaseArticle = a.title.toLowerCase();
      return lowerCaseArticle.includes(searchTerm);
    });
  };

  const handleClick = (a) => {
    if (faves.indexOf(a) === -1) {
      setFaves([...faves, a]);
    }
  };

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Landing
                articles={getFilteredArticles()}
                search={search}
                handleChange={handleChange}
                handleClick={handleClick}
                faves={faves}
              />
            }
          />

          <Route path='/display/:id' element={<Display articles={data.articles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
