import React from 'react'
import Display from './Display'

function Landing(props) {
    return(
        <div>
            {props.articles.map((article, i) => {
                return (
                    <Display key={i} article={article} addToArchive={props.addToArchive} />
                )
            })}
        </div>
    )
}

export default Landing