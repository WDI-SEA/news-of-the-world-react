import { React } from "react";
import { Link } from 'react-router-dom';

function Landing(props) {
    const popularArticles = props.articles.map((article, i)=> {
        return(
            <div key={`article${i}`}>
                <img src={article.urlToImage} width='300px' ></img>
                
                <Link to={`/article/${i}`}>
                    <h2>{article.title}</h2>
                </Link>
                <p>Written by: {article.author} {article.publishedAt}</p>
                <button onClick={()=>props.setFaves([...props.faves,{id:i, article}])} >Save Article</button>
            </div>
        )
    })

    const articleFaves = props.faves.map(fave=> {
        return(
            <li key={`fave${fave.id}`}>
                <Link to={`/article/${fave.id}`}>{fave.article.title}</Link>
            </li>
        )
    })
    const handleSubmit = e => {
        e.preventDefault()
        props.setSearch(props.inputValue)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input'>Search:</label>
                <input
                    type='text'
                    value={props.inputValue}
                    onChange={e=> props.setInputValue(e.target.value)}>
                </input>
                <button type='submit'>Search</button>
            </form>
            <div>
                <h3>Saved Articles:</h3>
                {articleFaves}
            </div>
        {popularArticles}
        </div>
    )
}

export default Landing;