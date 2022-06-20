import React from "react";
import { Link } from 'react-router-dom'


function Landing(props) {
    const headline = props.headlines.map((headline, i) => {
        return(<li key={`headline-${i}`} onClick={() =>{props.handleHeadlineClick(headline)}}>{headline.title}</li>)
    })
    return (
        <>
            <h1>Top Headlines</h1>
            <ol>
                 <Link to='/display'>{headline}</Link>
            </ol>
           
            
        </>
        
    )
}

export default Landing;