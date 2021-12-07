import { Routes, Route } from "react-router-dom";
import "../App.css";

import Display from "./pages/Display";
import Landing from "./pages/Landing";

import React, { useEffect, useState } from "react";

function App() {
  // Setting State for both Landing Page Articles and Search Articles
  const [data, setData] = useState([]); // <- I am eventually returning an Array of Objects
  const [search, setSearch] = useState(""); // <- Input should be a String
  const [save, setSave] = useState([]);

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

  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                onChange={handleChange}
                onSubmit={searchData}
                articles={data}
                search={search}
              />
            }
          />

          <Route path="/display/:id" element={<Display articles={data} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
