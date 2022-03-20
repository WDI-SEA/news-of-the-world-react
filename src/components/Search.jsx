import React from "react";
// import { useState } from "react";


export default function Search({keyword, setKeyword, handleSubmit}) {

  // const onChange = (e) => {
  //   e.preventDefault();
  //   setKeyword(e.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="keyword">search keyword:</label>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        id="keyword"
      />
    </form>
  );
}
