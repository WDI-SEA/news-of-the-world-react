import React from "react";
import {Link} from 'react-router-dom'

function Landing(props) {
    const articles = props.news.map((article,i) => {

        return (
            <div key={`article${i}`} >
                <Link to={`/display/${i}`} className='grid-container'>
                    <div className="text-colum1">
                        <h3 className="grid-item1">{article.title}</h3>

                        <p className="grid-item2">{article.description}</p>
                    
                        <p className="grid-item4">by: {article.author}</p>  
                    </div>

                    
                    <img src={article.urlToImage} alt={article.title} className="grid-item3" />
                    
                    

                    
                </Link>
            </div>
        )
    })
    console.log(articles)

    // const readLaters = props.readLater.map( => {

    // })

    const handleSubmit = e => {
        e.preventDefault()
        props.setSearch(props.inputValue)
    }
    return (
        <>
            <div className="news-search">
                <h2>News Search</h2>
                
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Search here for News...'
                        value={props.inputValue}
                        onChange={e => props.setInputValue(e.target.value)}
                    />

                    <button type='submit'>Search</button>
                </form>
            </div>
            
            <div className="articles">
                <h2>Articles</h2>

                {articles}
            </div>
               
       </> 
    )
}

export default Landing;