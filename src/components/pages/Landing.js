import React from "react";
import {Link} from 'react-router-dom'
import '../../App.css'


function Landing(props) {
    const articles = props.articles.map((e, i) =>{
        return (
        <li style={{margin:"7px 0", listStyle:"none"}}>
            <Link to={`/articles/${i}`}><p>{e.title}</p></Link>
        </li>
        )
         })
    return (
        <div>
         <h1>Landing Page</h1>  
        <ul style={{fontSize: "15pt", fontWeight:"bold"}}>
           {articles}  
        </ul>     
        </div>  
    )


 
}

export default Landing;