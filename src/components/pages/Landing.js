import React from "react";
import {Link} from 'react-router-dom'

function Landing(props) {
    const articles = props.apiResponse.map((article, i)=>{
        return(
            <div key={`article${i}`}>
                <Link  to={`/display/${i}`} > 
                    <h2>{article.title}</h2>
                    <p>{article.desciption}</p>
                    <p>by: {article.author}</p>
                </Link>
                <div>
                    <button onClick={()=>props.setReadLater([...props.readLater, {id: i, article}])} >read later</button>
                </div>

            </div>
        )
    })
    const readLaters = props.readLater.map(readLater=>{
        return(
            <li key={`readLater${readLater.id}`} >
                <Link to={`/display/${readLater.id}`} >{readLater.article.title}</Link>
            </li>
        )
    })
    const handleSubmit = e =>{
        e.preventDefault()
        props.setSearch(props.inputValue)
    }
    return (
        <>
            <h1>News Search</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="input" >Search:</label>
                <input type='text' value={props.inputValue} onChange={e => props.setInputValue(e.target.value)} />
                <button type='submit' >Search</button>
            </form>
            Read Later:
            <ul>
                {readLaters}
            </ul>

            Articles:
            {articles}
        </>
    )
}

export default Landing;