import React from 'react'

export default function Favorites({ pinnedArticles }){

    const article = pinnedArticles.map((art, index) => {
        return(
            <div key={`article${index}`}>
                <h2>{art.title}</h2>
            </div>
        )
    })
  return (
    <div> 
        { article }
    </div>
  )
}