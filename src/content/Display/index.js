import React from 'react';
import Article from './article.js'

export const Display = props => {

    let articles = props.data.map(article => {
        return (
            < Article article={article} />
        )
    })

    return (
        <div>
            {articles}
        </div>
    )
};