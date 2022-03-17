import { Routes, Route } from "react-router-dom";
import "../App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Display from "./pages/Display";
import Landing from "./pages/Landing";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordResults, setKeywordResults] = useState([]);
  // const [currentDate, setCurrentDate] = useState([])
  
  
    //gettingdate for correct format
  const date = new Date();
  const month= String(date.getMonth() + 1).padStart(2, '0')
  const day= String(date.getDate())
  const year = String(date.getFullYear())
  const fixedDate=`${year}-${month}-${day}`
  console.log(fixedDate)


  const topHeadlineUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const topicUrl = `https://newsapi.org/v2/everything?q=Apple&from=${fixedDate}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;


  console.log('TOPIC',topicUrl)



  console.log("@ APPPP");
  // console.log(topHeadlineUrl);
  // console.log(process.env.REACT_APP_NEWS_API_KEY);

  useEffect(() => {
    axios.get(topHeadlineUrl).then((response) => {
      console.log("response@axios", response);
      setTopHeadlines(response.data.articles);
    });
    // console.log(response.data.article)
  }, []);

  // useEffect(() => {
  //   async () => {
  //     const topicArticles = await axios.get;
  //   };
  // });

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing topHeadlines={topHeadlines} />} />
          <Route path="/display" element={<Display />} />
          {/* <Route path="/display" element={<Display />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
