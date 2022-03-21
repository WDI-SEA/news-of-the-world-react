import React, { useState } from 'react';


function Landing(props) {
    const [faves, setFaves] = useState([])
    
    const headlineArticles = props.headlines.map((headline, i) => {
        return(
            <div key={`headline-${i}`}>
                <a href={`${headline.url}`}>{headline.title}</a>
                <button onClick={()=>{
                    if(!faves.includes(headline)) {
                        setFaves([...faves, headline])
                    }
                }}>Favorite</button>
                {headline.author ? <p>By: {headline.author}</p> : ''}
                <img src={`${headline.urlToImage}`} alt={`${headline.title}`} />
                <p>{headline.description}</p>
            </div>
        )
    })

    const faveArticles = faves.map((headline, i) => {
        return(
            <li>
                <a href={`${headline.url}`}>{headline.title}</a>
                <button onClick={() => {
                    setFaves(faves.filter(fave => {return fave !== headline}))
                }}>Delete</button>
            </li>
        )
    })

    return (
        <div>
            <div id="faves">
                <h2>Favourites:</h2>
                <ul>
                    {faveArticles}
                </ul>
            </div>
            <hr></hr>
            <div id="headlines">
                {headlineArticles}
            </div>
        </div>
    )
}

export default Landing;