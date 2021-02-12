import React from 'react'

function Archive(props) {
    return(
        <div>
            <h1>Archived Stories</h1>
            {props.archive.map((article, i) => {
                return <p><a href={article.url} target="_blank">{article.url}</a></p>

            })}
        </div>
    )
}

export default Archive