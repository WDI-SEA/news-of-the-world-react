import React from 'react'

function Archive(props) {
    return(
        <div>
            <h1>Archived Stories</h1>
            {props.archive.map((article, i) => {
                return <h1>{article.title}</h1>

            })}
        </div>
    )
}

export default Archive