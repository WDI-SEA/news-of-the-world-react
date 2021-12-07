import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../App.css";

import Display from "./pages/Display";
import Landing from "./pages/Landing";
import SavedArticles from "./pages/SavedArticles";
import React, { useEffect, useState } from "react";
import Header from "./pages/Header";
import Search from "./pages/Search";

function App() {
  // Setting State for both Landing Page Articles and Search Articles
  const [data, setData] = useState([]); // <- I am eventually returning an Array of Objects
  const [search, setSearch] = useState(""); // <- Input should be a String
  const [saved, setSaved] = useState([]);

  // Setting the Initial Fetch API Call for Page Display
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0522d202fca541abb86953067a32c7dd"
    )
      .then((response) => response.json())
      .then((response) => {
        const responseData = Object.values(response); // <-- We need to parse this object of objects in to an array of objects
        setData(responseData[2]); // We are now setting the state of Data to what was returned from the promise.
      })
      .catch((error) => {
        console.log(
          "Wow! Something went wrong. Maybe you made too many API calls LMAO!",
          error
        );
      });
  }, []); // <- We set the dependency array to empty so it only runs upon Mounting.

  const handleChange = (e) => {
    setSearch(e.target.value); // <- Once the user stops typing and clicks the submit button, the value should pass to the fetch call without running after every fetch call.
  };

  // NOTE: Don't write this asynchronously! Weird behavior after Submission!
  const searchData = (e) => {
    e.preventDefault(); // <-- This wasn't working for some godforsaken reason. I can only assume, it was the way I set up the form.
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=0522d202fca541abb86953067a32c7dd`
    )
      .then((response) => response.json())
      .then((response) => {
        const responseData = Object.values(response);
        setData(responseData[2]); // This endpoint was miserable for this whole day.
      })
      .catch((error) => {
        console.log("Don't make too many API Calls!", error);
      });
  };

  const handleSave = (article) => {
    if (saved.indexOf(article) === -1) {
      setSaved((prevSaved) => [...saved, article]);
    }
  };

  // NOTE: FIGURE OUT HOW TO REMOVE THINGS FROM INDEX:`
  // const handleRemove = (id) => {
  //   setSaved((prevSaved) => {
  //     prevSaved.filter((article, index) => {
  //      if (article !== -1) {
  //        return filter;
  //      }
  //    });
  //  });
  // };

  return (
    <div className="App">
      <main>
        <Header />
        <Search onChange={handleChange} onSubmit={searchData} search={search} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                articles={data}
                search={search}
                handleSave={handleSave}
              />
            }
          />
          {/*NOTE TO SELF: WHEN PASSING THE FUNCTION AS A PROP, NAME IT WHAT YOU REFER TO IT IN THE CHILD COMPONENT. SAVE YOURSELF A TON OF GRIEF! ~GOOD GRIEF~ */}
          <Route path="/display/:id" element={<Display articles={data} />} />
          <Route
            path="/savedarticles"
            element={<SavedArticles articles={saved} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
