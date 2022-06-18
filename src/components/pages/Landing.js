import React from "react";
import {Link} from 'react-router-dom'
import {useState} from 'react'


function Landing(props) {
    let [search, setSearch] = useState('')
    const favArticles = props.fave.map((fav, i) => {
        const {title} = fav
        return (
            <>
            <h3 key={title}><Link to={`/display/${i}`}>{title}</Link></h3>
            <button onClick={() => props.delete(fav)}>Delete</button>
            </>
        )
    })

    // add a filter within the map
    const articleComponent = props.articles.filter(article => article.title.toLowerCase().includes(search)).map((article, i) => {
        const {title} = article
        return (
         <div>
            <li key={`article${i}`}>
              <Link to={`/display/${i}`}><h2>{title}</h2></Link>    
             </li>
             <button onClick={() => props.fav(article)}>Fav</button>
            
         </div>
         )
    })


// const handleChange = (e) => {
//     setSearch(e.target.value)
// }

// const filteredNews = () => {
//     const searchTerm = search.toLowerCase()
//     return props.articles.filter(article => {
//         let lowerCaseTitle = article.title.toLowerCase()
//         return lowerCaseTitle.includes(searchTerm)
//     })
// }

    return (
        <>
        <label htmlFor='article-search'>Search The Articles:</label>
        <input 
            id='article-search'
            type='type'
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
            <h1>FAVORITOOO</h1>
        {favArticles}
        <h1>List of Article Page!</h1>
        {articleComponent}
        </>
    )
}

export default Landing;