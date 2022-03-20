import React from 'react'

const Favorites = ({faveArticles}) => {

    const allFaves = faveArticles.map((fave, idx) => {
        return(
            <div key={idx}>
                <h2>{fave.title}</h2>
            </div>
        )
    })
  return (
    <div>
        <h1>Hello from Faves</h1>
        { allFaves }
    </div>
  )
}

export default Favorites