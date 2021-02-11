import React from 'react';

//display the API as the content axios
export const Display = props => {

    return (
        <div className="articles">
            <li key={props.i}>
                <a href={props.article.url}><img src={props.article.urlToImage}/></a>
                    
                <br></br>
                <h3>{props.article.title}</h3>
                <h4>{props.article.author}</h4>
                <br></br>
                <h6>{props.article.publishedAt}</h6>
            </li>
        </div>
    )
};