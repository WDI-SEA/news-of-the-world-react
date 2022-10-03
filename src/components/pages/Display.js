import React from "react";

export default function Display(props) {


    //  fxn to return and map news items
const displayResults= searchResults.map((searchResult, i)=>{
    return(
      
      <li key= {`result-${i}`} style={{listStyleType: "none"}}>
        title ={searchResult.title}
        description ={searchResult.description}
        url = {searchResult.url}
      </li> 
    )
    return (
        <div>
        <h1>Display Page</h1>
        <ul> {displayResults} </ul>
        </div>
    )
})
}