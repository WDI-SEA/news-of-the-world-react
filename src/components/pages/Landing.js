import React from "react";
import { Link} from "react-router-dom"
import { useEffect, useState } from 'react'
require('dotenv').config();

function Landing(props) {
    // let [searchResults, setsearchResults] = useState([])
    // let [searchTerm, setsearchTerm] = useState("bitcoin")
    // const [faves, setFaves] = useState([])

    //     useEffect(() => {
    //         // fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`)
    //         fetch(`https:newsapi.org/v2/everything?q=${searchTerm}&apiKey=b15b0eba582e41c7bc6842087fd2ca5e` )
    //         .then(response => response.json())
    //         .then(rdata => {
    //             console.log('response data', rdata)
    //             setsearchResults(rdata.articles)
    //         })
    //     }, [searchTerm])

        
    //     // const handleChange = (e) => {
    //         //     setsearchTerm(e.target.value)
    //         // }
            
    //         const handleSubmit = (e) => {
    //             e.preventDefault()
    //             setsearchTerm(e.target[0].value)
    //             console.log(e)
    //         }
            
    //         const handleClick = (faveArticle) =>  {
    //             if(faves.indexOf(faveArticle)===-1) {
    //                 setFaves([...faves, faveArticle])
    //                 }
    //         }

    //         const allResults=searchResults.map(article => {
    //             return <li  onClick={()=>handleClick(article)} key={article._id}>
    //                 <Link to={`/${article.title}`}>{article.title}</Link>
    //                 <p>{article.title}</p>
    //                 </li>
    //         })
    //         const allFaves= faves.map((article,i) => {
    //             return <li key={i}>
    //                 <p>{article.title}</p>
    //                 </li>
    //         })

        return(
            <>
            <h1>Landing Page</h1>
            <form onSubmit={props.handleSubmit} >
                <input type="text" name="search" id="search" />
                <input type="submit" value="Search" />
            </form>
            <p>Results</p>
            <ul>
                {props.allResults}
            </ul>
            <br />
            <p>Favorite Results</p>
            <ul>
                {props.allFaves}
            </ul>
            </>
        )
}

export default Landing;