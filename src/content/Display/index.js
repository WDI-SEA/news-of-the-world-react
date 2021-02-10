import React from 'react';

//display the API as the content axios
export const Display = props => {

    let content = props.content ? '' : 'Ruh-Roh! API or props fail!';
   console.log(props.content)
    let title 
    if (props.content.length != 0) {
        title = props.content.articles.map((article, i) => {
        return (<li key={i}>
                    <h2>{article.title}</h2>
                    <br></br>
                    <h4>{article.author}</h4>
                    <br></br>
                    <h6>{article.publishedAt}</h6>
                 </li>
        )
    } )
}
console.log(props.content)
    return (
        <div>
            {title}
            
        </div>
    )
};