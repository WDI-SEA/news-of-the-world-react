import React from 'react';
import Article from './article.js'
import { CardColumns } from 'react-bootstrap'

export const Display = props => {

    let articles = props.data.map(article => {
        return (
            < Article article={article} />
        )
    })

    return (
        <div>
            <CardColumns>
                {articles}
            </CardColumns>
        </div>
    )
};