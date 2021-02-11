import React from 'react';
import { Link } from 'react-router-dom';

//display the API as the content axios
export const Display = props => {

    let content = props.content ? '' : 'Ruh-Roh! API or props fail!';
   console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', props.article)
    return (
        <div>
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