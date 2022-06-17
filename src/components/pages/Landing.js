import React from "react";
import {Link} from 'react-router-dom'


function Landing(props) {
    const articleComponent = props.articles.map((article, i) => {
        const {title, source} = article
        return (
         <div>

            <li key={`article${i}`}>
                
             
              <Link to={`/display/${i}`}><h2>{title}</h2></Link> 
             
             
                
             </li>
            
        
        
         </div>
         )
    })
    return (
        <>
        <h1>List of Article Page!</h1>
        
        {articleComponent}
        </>
    )
}

export default Landing;