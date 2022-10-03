import React from "react";
import { Link } from 'react-router-dom'


export default function Landing(props) {

    const articles = props.apiResonse.map((article, i) => {
        return(
            <div key={`article-${i}`}>
                <Link to={`/details/${i}`}>
                    <h2>{article.title}</h2>
                    <p>by: {article.description}</p>
                </Link>
            </div>
        )
    })

    const handleSubmit = (e) => {
    e.preventDefault()
    props.setSearch(props.inputValue)
    }

    return (
        <div>
            <h1>News Search</h1>
            
            <form onSubmit={(handleSubmit)}>
                    <label htmlFor='input'>Search:</label>
                    <input 
                        type="text" 
                        value={props.inputValue}
                        onChange={e => props.setInputValue(e.target.value)} 
                    />
            </form>
           
            {articles}
        </div>
    )
}