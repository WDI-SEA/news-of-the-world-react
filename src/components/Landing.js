import React from 'react'
import Display from './Display'

function Landing(props) {
    return(
        <div>
            {props.articles.map((article, i) => {
                return (
                    <Display key={i} article={article} />
                )
            })}
        </div>
    )
}

export default Landing