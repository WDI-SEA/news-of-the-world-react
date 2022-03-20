import { Routes, Route } from "react-router-dom";
import "../App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Display from "./pages/Display";
import Landing from "./pages/Landing";
import Header from "./layout/Header";

function App() {
  // const [topHeadlines, setTopHeadlines] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordResults, setKeywordResults] = useState([]);
  const [currentDate, setCurrentDate] = useState([]);
  const [headlines, setHeadlines] = useState([]);

  //gettingdate for correct format
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate());
  const year = String(date.getFullYear());
  const fixedDate = `${year}-${month}-${day}`;
  console.log(fixedDate);

  const topHeadlineUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  const topicUrl = `https://newsapi.org/v2/everything?q=${keyword}&from=${fixedDate}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  console.log("@ APPPP");
  console.log("TOPIC", topicUrl);

  // console.log(topHeadlineUrl);
  // console.log(process.env.REACT_APP_NEWS_API_KEY);

  const getHeadlines = (url) => {
    axios.get(url).then((response) => {
      console.log("response@axios", response);
      const headlines = response.data.articles.map((article, idx) => {
        return {
          ...article,
          id: idx
        }
      })
      setHeadlines(headlines);
    });
  };

  useEffect(() => {
    getHeadlines(topHeadlineUrl)
    // axios.get(topHeadlineUrl).then((response) => {
    //   console.log("response@axios", response);
    //   setHeadlines(response.data.articles);
    // });
    // console.log(response.data.article)
  }, []);


  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("ONSUBMITTTTT AT APPP");
    getHeadlines(topicUrl)
    // axios.get(topicUrl).then((response) => {
    //   console.log("url@onsub", topicUrl);
    //   setHeadlines(response.data.articles);
    // });
  };

  return (
    <div className="App">
      <main>
        <Header
          keyword={keyword}
          setKeyword={setKeyword}
          handleSubmit={onSubmit}
        />
        <Routes>
          <Route path="/" element={<Landing headlines={headlines} />} />
          <Route
            path="/articles/:id"
            element={<Display headlines={headlines} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import "../App.css";
// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Display from "./pages/Display";
// import Landing from "./pages/Landing";

// function App() {
//   const [topHeadlines, setTopHeadlines] = useState([]);
//   const [keyword, setKeyword] = useState("");
//   const [keywordResults, setKeywordResults] = useState([]);
//   // const [currentDate, setCurrentDate] = useState([])

//     //gettingdate for correct format
//   const date = new Date();
//   const month= String(date.getMonth() + 1).padStart(2, '0')
//   const day= String(date.getDate())
//   const year = String(date.getFullYear())
//   const fixedDate=`${year}-${month}-${day}`
//   console.log(fixedDate)

//   const topHeadlineUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
//   const topicUrl = `https://newsapi.org/v2/everything?q=Apple&from=${fixedDate}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

//   console.log('TOPIC',topicUrl)

//   console.log("@ APPPP");
//   // console.log(topHeadlineUrl);
//   // console.log(process.env.REACT_APP_NEWS_API_KEY);

//   useEffect(() => {
//     axios.get(topHeadlineUrl).then((response) => {
//       console.log("response@axios", response);
//       setTopHeadlines(response.data.articles);
//     });
//     // console.log(response.data.article)
//   }, []);

//   // useEffect(() => {
//   //   async () => {
//   //     const topicArticles = await axios.get;
//   //   };
//   // });

//   return (
//     <div className="App">
//       <main>
//         <Routes>
//           <Route path="/" element={<Landing topHeadlines={topHeadlines} />} />
//           <Route path="/display" element={<Display />} />
//           {/* <Route path="/display" element={<Display />} /> */}
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;
