import React from "react";
import { useParams } from "react-router-dom";

function Display(props) {
  // HOLY FUCKING SHIT
  // IF YOU DONT HIT THE INSERTION ROUTE
  // YOU DONT GET RESULTS
  const { id } = useParams();
  console.log(useParams());
  return (
    <div>
      <h1>Article Details</h1>
      <small>{props.articles[id].title}</small>
    </div>
  );
}

export default Display;
