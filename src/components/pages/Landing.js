import React from "react"
import { Link } from "react-router-dom"


function Landing({handleSubmit, handleChange, inputValue, searchResults, faves}) {
 const searchResultsList = searchResults.map((result,i)=>{
        return (
            <div className="news-box">
                <h3 key={`results-${i}`}><Link to={`/display/${i}`}>{result.title}</Link></h3>
                <img src={result.urlToImage} alt={result.title} style={{width: 300}}/>
            </div>
            )
            
        })
        const favesList = faves.map((fave,i)=>{
        return( <div className="news-box">
            <h3 key={`faves-${i}`}><Link to={`/display/${i}`}>{fave.title}</Link></h3>
            <img src={fave.urlToImage} alt={fave.title} style={{width: 300}}/>
        </div>
        )})

    return (
        <div>
            <h1>Search for News Articles...</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={inputValue}/>
                <button type="submit">Search</button>
            </form>
            

            <div className='faves'>
             <h1>Faves</h1>
                {favesList}

            </div>

            <hr/>
            
            {searchResultsList}
            

        </div>
    )
}

export default Landing;