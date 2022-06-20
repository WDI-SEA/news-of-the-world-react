import React from "react";
import { Link } from 'react-router-dom'

function Search(props) {
    const result = props.result.map((result, i) => {
        return(
            <li key={`result-${i}`} onClick={()=>{props.handleHeadlineClick(result)}}>{result.title}</li>
        )
    })
    return(
        <>
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.handleChange}/>
            <button type="submit">Search!</button>
        </form>
        <ol>
            <Link to='/display'>{result}</Link>
        </ol>
        </>
    )
}

export default Search