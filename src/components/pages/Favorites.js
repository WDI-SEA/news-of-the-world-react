import React from 'react'

export default function Favorites({ pinnedArticles }){

    const article = pinnedArticles.map((art, index) => {
        return(
            <>
            
            <div key={`article${index}`} className='card-head'>
                <h2>{art.title}</h2>
            </div>            
            </>            
        )
    })
  return (
    <div className='main'> 
    <div className='flex-container'>
        {article}
        </div>
    </div>
  )
}