import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

export default function Header({keyword, setKeyword, handleSubmit}) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">homepage</Link>
        </li>
        <li>
          <Link to="/faves">favorited</Link>
        </li>
        <li>
          <Search keyword={keyword} setKeyword={setKeyword} handleSubmit={handleSubmit}/>
        </li>
      </ul>
    </nav>
  );
}
